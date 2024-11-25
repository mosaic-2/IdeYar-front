import {
  Box,
  Avatar,
  Typography,
  IconButton,
  TextField,
  Divider,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { useState, useEffect, ChangeEvent } from "react";
import { updateProfileApi } from "../../apis/boxProfileApi";

// Import date picker components
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";
import jMoment from "moment-jalaali";

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

const ProfileBox = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState("user@example.com");
  const [phone, setPhone] = useState("09123456789");
  const [bio, setBio] = useState("این یک بیوگرافی کوتاه درباره کاربر است.");
  const [birthday, setBirthday] = useState<jMoment.Moment | null>(null);
  const [profileImage, setProfileImage] = useState<string | undefined>(
    "/path/to/profile-image.jpg"
  );
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | undefined>(
    undefined
  );

  const handleToggleEdit = async () => {
    if (isEditing) {
      // Call API to save updated profile information
      try {
        // Convert Jalali date to Gregorian date before sending to API
        const gregorianDate = birthday
          ? birthday.locale("en").format("YYYY-MM-DD")
          : null;
        await updateProfileApi({ email, phone, bio, birthday: gregorianDate });
        alert("Profile updated successfully");
      } catch (error) {
        console.error("Error updating profile:", error);
        alert("Failed to update profile");
      }
    }
    setIsEditing(!isEditing);
  };

  const handleFieldChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | { value: unknown }
    >,
    field: "email" | "phone" | "bio"
  ) => {
    const { value } = event.target;
    if (field === "email") setEmail(value as string);
    if (field === "phone") setPhone(value as string);
    if (field === "bio") setBio(value as string);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Ensure the selected file is an image
      if (!file.type.startsWith("image/")) {
        alert("لطفاً یک فایل تصویر انتخاب کنید.");
        return;
      }

      // Revoke the previous object URL to avoid memory leaks
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }

      // Create a new object URL for the selected image
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      setImageFile(file);
      setImagePreviewUrl(imageUrl);
    }
  };

  // Cleanup: Revoke object URL when component unmounts or when a new image is selected
  useEffect(() => {
    return () => {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
    };
  }, [imagePreviewUrl]);

  return (
    <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={3}
        sx={{
          border: "1px solid #ddd",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: 350,
          minHeight: 600,
          direction: "rtl",
          bgcolor: "background.paper",
        }}
      >
        {/* Profile Picture and Upload Icon */}
        <Box position="relative">
          <Avatar
            sx={{
              width: 200,
              height: 200,
              border: "2px solid #ddd",
              objectFit: "cover",
            }}
            src={profileImage}
            alt="User Profile"
          />
        </Box>

        {/* Icons for Upload */}
        <Box display="flex" justifyContent="flex-end" width="100%" mt={2}>
          <IconButton
            color="default"
            aria-label="upload picture"
            component="label"
            sx={{ color: "gray" }}
          >
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleImageChange}
            />
            <PhotoCamera />
          </IconButton>
        </Box>

        {/* Divider under the upload section */}
        <Divider sx={{ width: "100%", mb: 4 }} />

        {/* User Information */}
        <Typography
          variant="h6"
          gutterBottom
          sx={{ mb: isEditing ? "10px" : "12px" }}
        >
          نام کاربری
        </Typography>

        {/* Email Field */}
        <Box
          display="flex"
          alignItems="center"
          width="100%"
          justifyContent="center"
          mb={2}
          sx={{ gap: 2 }}
        >
          {isEditing ? (
            <TextField
              value={email}
              onChange={(e) => handleFieldChange(e, "email")}
              autoFocus
              size="small"
              variant="outlined"
              sx={{
                flexGrow: 1,
                width: "100%",
                maxWidth: 250,
                height: 40,
              }}
              InputProps={{
                sx: {
                  "& .MuiInputBase-input": {
                    textAlign: "center",
                  },
                },
              }}
            />
          ) : (
            <Typography
              variant="body1"
              sx={{
                flexGrow: 1,
                width: "100%",
                maxWidth: 250,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {email}
            </Typography>
          )}
        </Box>

        {/* Phone Field */}
        <Box
          display="flex"
          alignItems="center"
          width="100%"
          justifyContent="center"
          mb={2}
          sx={{ gap: 2 }}
        >
          {isEditing ? (
            <TextField
              value={phone}
              onChange={(e) => handleFieldChange(e, "phone")}
              size="small"
              variant="outlined"
              sx={{
                flexGrow: 1,
                width: "100%",
                maxWidth: 250,
                height: 40,
              }}
              InputProps={{
                sx: {
                  "& .MuiInputBase-input": {
                    textAlign: "center",
                  },
                },
              }}
            />
          ) : (
            <Typography
              variant="body1"
              sx={{
                flexGrow: 1,
                width: "100%",
                maxWidth: 250,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {phone}
            </Typography>
          )}
        </Box>

        {/* Bio Field */}
        <Box
          display="flex"
          alignItems="center"
          width="100%"
          justifyContent="center"
          mb={2}
          sx={{ gap: 2 }}
        >
          {isEditing ? (
            <TextField
              value={bio}
              onChange={(e) => handleFieldChange(e, "bio")}
              size="small"
              variant="outlined"
              multiline
              rows={3}
              sx={{
                flexGrow: 1,
                width: "100%",
                maxWidth: 250,
              }}
            />
          ) : (
            <Typography
              variant="body1"
              sx={{
                flexGrow: 1,
                width: "100%",
                maxWidth: 250,
                minHeight: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {bio}
            </Typography>
          )}
        </Box>

        {/* Birthday Field */}
        <Box
          display="flex"
          alignItems="center"
          maxWidth="87%"
          justifyContent="center"
          mb={2}
          sx={{ gap: 2 }}
        >
          {isEditing ? (
            <DatePicker
              value={birthday}
              onChange={(newValue) => {
                setBirthday(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  variant="outlined"
                  sx={{
                    flexGrow: 1,
                    width: "100%",
                    maxWidth: 250,
                    height: 40,
                    "& .MuiInputBase-input": {
                      textAlign: "center",
                    },
                  }}
                />
              )}
              // Customize the calendar popup
              PaperProps={{
                sx: {
                  maxWidth: 200,
                  margin: "0 auto",
                },
              }}
              PopperProps={{
                sx: {
                  "& .MuiPaper-root": {
                    margin: "0 auto",
                    left: "50% !important",
                    transform: "translateX(-50%) !important",
                  },
                },
              }}
            />
          ) : (
            <Typography
              variant="body1"
              sx={{
                flexGrow: 1,
                width: "80%",
                maxWidth: 250,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {birthday ? birthday.format("jYYYY/jMM/jDD") : ""}
            </Typography>
          )}
        </Box>

        {/* Single Edit/Save Button at the Bottom */}
        <Box display="flex" justifyContent="flex-end" width="100%" mt={2}>
          <IconButton
            size="small"
            onClick={handleToggleEdit}
            sx={{ color: "gray" }}
          >
            {isEditing ? (
              <CheckIcon fontSize="small" />
            ) : (
              <EditIcon fontSize="small" />
            )}
          </IconButton>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default ProfileBox;
