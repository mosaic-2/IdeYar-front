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
import {
  changeEmailApi,
  updateProfileInfoApi,
  getProfileInfoApi,
} from "../../apis/profileBoxApi";
import { useSnackbar } from "notistack";

// Import date picker components
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";
import jMoment from "moment-jalaali";

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

const ProfileBox = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [isEditing, setIsEditing] = useState(false);

  // Profile fields
  const [username, setUsername] = useState("نام کاربری");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [birthday, setBirthday] = useState<jMoment.Moment | null>(null);
  const [profileImage, setProfileImage] = useState<string>(
    "/path/to/default-profile-image.jpg"
  );

  // Initial values to detect changes
  const [initialUsername, setInitialUsername] = useState("");
  const [initialEmail, setInitialEmail] = useState("");
  const [initialPhone, setInitialPhone] = useState("");
  const [initialBio, setInitialBio] = useState("");
  const [initialBirthday, setInitialBirthday] = useState<jMoment.Moment | null>(
    null
  );
  const [initialProfileImage, setInitialProfileImage] = useState<string>(
    "/path/to/default-profile-image.jpg"
  );

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | undefined>(
    undefined
  );

  // Fetch user profile information when the component mounts
  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const response = await getProfileInfoApi();
        const data = response.data;
        setUsername(data.username || "نام کاربری");
        setPhone(data.phone || "");
        setBio(data.bio || "");
        setBirthday(
          data.birthday ? jMoment(data.birthday, "YYYY-MM-DD") : null
        );
        setProfileImage(
          data.profile_image_url || "/path/to/default-profile-image.jpg"
        );
        // Set initial values
        setInitialUsername(data.username || "");
        setInitialPhone(data.phone || "");
        setInitialBio(data.bio || "");
        setInitialBirthday(
          data.birthday ? jMoment(data.birthday, "YYYY-MM-DD") : null
        );
        setInitialProfileImage(
          data.profile_image_url || "/path/to/default-profile-image.jpg"
        );
        // If email is available, set email and initialEmail
        setEmail(data.email || "");
        setInitialEmail(data.email || "");
      } catch (error) {
        console.error("Error fetching profile info:", error);
      }
    };
    fetchProfileInfo();
  }, []);

  // Handle saving changes
  const handleToggleEdit = async () => {
    if (isEditing) {
      try {
        let emailChanged = email !== initialEmail;
        let profileInfoChanged = false;

        // Prepare the update profile data
        const updateProfileData: {
          username?: string;
          phone?: string;
          bio?: string;
          birthday?: string;
        } = {};

        if (username !== initialUsername) {
          updateProfileData.username = username;
          profileInfoChanged = true;
        }
        if (phone !== initialPhone) {
          updateProfileData.phone = phone;
          profileInfoChanged = true;
        }
        if (bio !== initialBio) {
          updateProfileData.bio = bio;
          profileInfoChanged = true;
        }
        if (
          (birthday && !initialBirthday) ||
          (!birthday && initialBirthday) ||
          (birthday &&
            initialBirthday &&
            !birthday.isSame(initialBirthday, "day"))
        ) {
          // Convert Jalali date to Gregorian date before sending to API
          const gregorianDate = birthday
            ? birthday.locale("en").format("YYYY-MM-DD")
            : null;
          updateProfileData.birthday = gregorianDate;
          profileInfoChanged = true;
        }

        if (emailChanged) {
          // Call ChangeEmail API
          await changeEmailApi(email);
          enqueueSnackbar("برای تغییر ایمیل خود، به ایمیل خود مراجعه کنید", {
            variant: "success",
          });
          // Update initial email
          setInitialEmail(email);
        }

        if (profileInfoChanged) {
          // Call the UpdateProfileInfo API with the updated profile data
          const updatedProfile = await updateProfileInfoApi(
            updateProfileData.username ?? initialUsername,
            updateProfileData.phone ?? initialPhone,
            updateProfileData.bio ?? initialBio,
            updateProfileData.birthday ??
              initialBirthday?.locale("en").format("YYYY-MM-DD") ??
              ""
          );
          enqueueSnackbar("اطلاعات پروفایل با موفقیت به‌روزرسانی شد", {
            variant: "success",
          });

          // Update the initial values with the response from the server
          setInitialUsername(updatedProfile.username);
          setInitialPhone(updatedProfile.phone);
          setInitialBio(updatedProfile.bio);
          setInitialBirthday(
            updatedProfile.birthday
              ? moment(updatedProfile.birthday, "YYYY-MM-DD")
              : null
          );

          if (imageFile) {
            // Update profile image preview
            setInitialProfileImage(profileImage);
            setImageFile(null); // Reset imageFile after successful upload
          }
        }
      } catch (error) {
        console.error("Error updating profile:", error);
        enqueueSnackbar("خطا در به‌روزرسانی پروفایل", { variant: "error" });
      }
    }
    setIsEditing(!isEditing);
  };

  // Handle field changes
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

  // Handle profile image change
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

        {/* Username Field */}
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              {username}
            </Typography>
          )}
        </Box>

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

        {/* Birthday Field */}
        <Box
          display="flex"
          alignItems="center"
          width="83.9%"
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
                  width: 200,
                  margin: "0 auto",
                },
              }}
              PopperProps={{
                sx: {
                  "& .MuiPaper-root": {
                    width: 250,
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
                width: "100%",
                maxWidth: 250,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                wordBreak: "break-word",
                overflowWrap: "break-word",
                padding: 1,
              }}
            >
              {birthday ? birthday.format("jYYYY/jMM/jDD") : ""}
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
              minRows={3}
              maxRows={10}
              sx={{
                flexGrow: 1,
                width: "100%",
                maxWidth: 250,
                "& .MuiInputBase-input": {
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
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
                minHeight: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                wordBreak: "break-word",
                overflowWrap: "break-word",
                padding: 1,
              }}
            >
              {bio}
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
