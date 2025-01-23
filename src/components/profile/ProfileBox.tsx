import {
  Box,
  Avatar,
  Typography,
  IconButton,
  TextField,
  Divider,
  Stack,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { useState, useEffect, ChangeEvent } from "react";
import {
  updateProfileInfoApi,
  getProfileInfoApi,
} from "../../apis/profileBoxApi";
// Removed the .ts extension here:
import { uploadUserImageApi } from "../../apis/uploadImageApi";

import { useSnackbar } from "notistack";

// Import date picker components
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";
import jMoment from "moment-jalaali";

import { useNavigate } from "react-router-dom";
import PrimaryGrayButton from "../buttons/PrimaryGrayButton";
import PrimaryButton from "../buttons/PrimaryButton";

// If no type definitions exist for `moment-jalaali`, you can do one of:
//  1) npm install --save-dev @types/moment-jalaali (if available)
//  2) Create global.d.ts (or any .d.ts in src/) with `declare module 'moment-jalaali';`
jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

/** Simple validator for "YYYY-MM-DD" format. Adjust as needed. */
function isValidDateFormat(dateStr: string | undefined): boolean {
  if (!dateStr) return false;
  return /^\d{4}-\d{2}-\d{2}$/.test(dateStr);
}

const ProfileBox = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  // Profile fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [birthday, setBirthday] = useState<jMoment.Moment | null>(null);
  const [profileImage, setProfileImage] = useState<string>(
    "/path/to/default-profile-image.jpg"
  );

  // Initial values to detect changes
  const [initialUsername, setInitialUsername] = useState("");
  const [initialPhone, setInitialPhone] = useState("");
  const [initialBio, setInitialBio] = useState("");
  const [initialBirthday, setInitialBirthday] = useState<jMoment.Moment | null>(
    null
  );
  const [initialEmail, setInitialEmail] = useState("");
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

        console.log("Fetched profile data:", data);

        // Fix property name: from data.profileImageUrl to data.profile_image_url
        const fullProfileImageUrl = data.profileImageUrl
          ? `https://back.ideyar-app.ir/api/image/${data.profileImageUrl}`
          : "/path/to/default-profile-image.jpg";

        setUsername(data.username || "");
        setPhone(data.phone || "");
        setBio(data.bio || "");

        // Check date format or convert
        if (isValidDateFormat(data.birthday)) {
          // data.birthday is already "YYYY-MM-DD" – we can parse it with jMoment
          setBirthday(jMoment(data.birthday, "YYYY-MM-DD"));
        } else {
          // not a valid format or empty
          setBirthday(null);
        }

        setProfileImage(fullProfileImageUrl);
        setInitialProfileImage(fullProfileImageUrl);

        setInitialUsername(data.username || "");
        setInitialPhone(data.phone || "");
        setInitialBio(data.bio || "");
        setInitialBirthday(
          data.birthday ? jMoment(data.birthday, "YYYY-MM-DD") : null
        );
        setInitialEmail(data.email || "");
        setEmail(data.email || "");
      } catch (error) {
        console.error("Error fetching profile info:", error);
      }
    };
    fetchProfileInfo();
  }, []);

  // Handle saving changes (only username, phone, birthday, bio)
  const handleToggleEdit = async () => {
    if (isEditing) {
      try {
        let profileInfoChanged = false;
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
          // Convert from jMoment to Gregorian
          const gregorianDate = birthday
            ? birthday.locale("en").format("YYYY-MM-DD")
            : "";
          updateProfileData.birthday = gregorianDate;
          profileInfoChanged = true;
        }

        if (profileInfoChanged) {
          // We get an AxiosResponse, so we want the .data from it
          const updatedProfileResponse = await updateProfileInfoApi(
            updateProfileData.username ?? initialUsername,
            updateProfileData.phone ?? initialPhone,
            updateProfileData.bio ?? initialBio,
            updateProfileData.birthday ??
              initialBirthday?.locale("en").format("YYYY-MM-DD") ??
              ""
          );

          const updatedProfile = updatedProfileResponse.data;

          enqueueSnackbar("اطلاعات پروفایل با موفقیت به‌روزرسانی شد", {
            variant: "success",
          });

          setInitialUsername(updatedProfile.username);
          setInitialPhone(updatedProfile.phone);
          setInitialBio(updatedProfile.bio);
          setInitialBirthday(
            updatedProfile.birthday
              ? jMoment(updatedProfile.birthday, "YYYY-MM-DD")
              : null
          );

          if (imageFile) {
            setInitialProfileImage(profileImage);
            setImageFile(null);
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
    field: "phone" | "bio"
  ) => {
    const { value } = event.target;
    if (field === "phone") setPhone(value as string);
    if (field === "bio") setBio(value as string);
  };

  // Handle profile image change
  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("لطفاً یک فایل تصویر انتخاب کنید.");
        return;
      }

      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }

      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      setImageFile(file);
      setImagePreviewUrl(imageUrl);

      try {
        const response = await uploadUserImageApi(file);
        if (response) {
          console.log("Image uploaded successfully:", response);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("خطا در بارگذاری تصویر. لطفاً دوباره تلاش کنید.");
      }
    }
  };

  // Cleanup object URL
  useEffect(() => {
    return () => {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
    };
  }, [imagePreviewUrl]);

  // Helper to get placeholder text if field is empty
  const getDisplayValue = (value: string, placeholder: string) => {
    return value.trim() === "" ? placeholder : value;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
      <Stack
        sx={{
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
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
                  fontWeight: "bold",
                }}
              >
                {getDisplayValue(username, "نام کاربری")}
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
                {getDisplayValue(phone, "شماره همراه")}
              </Typography>
            )}
          </Box>

          {/* Birthday Field using new slotProps API */}
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
                // MUI v6+ uses slotProps instead of renderInput
                slotProps={{
                  textField: {
                    size: "small",
                    variant: "outlined",
                    sx: {
                      flexGrow: 1,
                      width: "100%",
                      maxWidth: 250,
                      height: 40,
                      "& .MuiInputBase-input": {
                        textAlign: "center",
                      },
                    },
                  },
                  popper: {
                    sx: {
                      "& .MuiPaper-root": {
                        width: 250,
                        margin: "0 auto",
                        left: "50% !important",
                        transform: "translateX(-50%) !important",
                      },
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
                {birthday ? birthday.format("jYYYY/jMM/jDD") : "تاریخ تولد"}
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
                {getDisplayValue(bio, "بیو")}
              </Typography>
            )}
          </Box>

          <Divider sx={{ width: "100%", mb: 2 }} />

          {/* Email + Buttons Box */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
            py={1}
            sx={{
              direction: "rtl",
            }}
          >
            {/* Email Field (Not Editable) */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={2}
              sx={{
                border: "1px solid #ddd",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                width: "100%",
                maxWidth: 350,
                minHeight: 50,
                bgcolor: "background.paper",
              }}
            >
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
                {email || "ایمیل تعریف نشده"}
              </Typography>
            </Box>

            {/* Action Buttons */}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
              width="100%"
              maxWidth={350}
              mt={2}
            >
              <PrimaryButton
                text="تغییر ایمیل"
                onClick={() => {
                  navigate("/change-email");
                }}
                width="300px"
              />
              <PrimaryButton
                text="تغییر رمز عبور"
                onClick={() => {
                  navigate("/change-pass");
                }}
                width="300px"
              />
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
        </Box>
      </Stack>
    </LocalizationProvider>
  );
};

export default ProfileBox;
