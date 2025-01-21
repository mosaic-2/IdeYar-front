import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Avatar, Typography, IconButton, TextField, Divider, Stack, } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { useState, useEffect } from "react";
import { updateProfileInfoApi, getProfileInfoApi, } from "../../apis/profileBoxApi";
import { uploadUserImageApi } from "../../apis/uploadImageApi.ts";
import { useSnackbar } from "notistack";
// Import date picker components
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";
import jMoment from "moment-jalaali";
import { useNavigate } from "react-router-dom";
import PrimaryGrayButton from "../buttons/PrimaryGrayButton";
jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });
const ProfileBox = () => {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    // Profile fields
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [bio, setBio] = useState("");
    const [birthday, setBirthday] = useState(null);
    const [profileImage, setProfileImage] = useState("/path/to/default-profile-image.jpg");
    // Initial values to detect changes
    const [initialUsername, setInitialUsername] = useState("");
    const [initialPhone, setInitialPhone] = useState("");
    const [initialBio, setInitialBio] = useState("");
    const [initialBirthday, setInitialBirthday] = useState(null);
    const [initialEmail, setInitialEmail] = useState("");
    const [initialProfileImage, setInitialProfileImage] = useState("/path/to/default-profile-image.jpg");
    const [imageFile, setImageFile] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(undefined);
    // Fetch user profile information when the component mounts
    useEffect(() => {
        const fetchProfileInfo = async () => {
            try {
                const response = await getProfileInfoApi();
                const data = response.data;
                console.log("Fetched profile data:", data);
                const fullProfileImageUrl = data.profileImageUrl
                    ? `https://back.ideyar-app.ir/api/image/${data.profileImageUrl}`
                    : "/path/to/default-profile-image.jpg";
                setUsername(data.username || "");
                setPhone(data.phone || "");
                setBio(data.bio || "");
                setBirthday(data.birthday ? jMoment(data.birthday, "YYYY-MM-DD") : null);
                setProfileImage(fullProfileImageUrl);
                setInitialProfileImage(fullProfileImageUrl);
                setInitialUsername(data.username || "");
                setInitialPhone(data.phone || "");
                setInitialBio(data.bio || "");
                setInitialBirthday(data.birthday ? jMoment(data.birthday, "YYYY-MM-DD") : null);
                setInitialEmail(data.email || "");
                setEmail(data.email || "");
            }
            catch (error) {
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
                const updateProfileData = {};
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
                if ((birthday && !initialBirthday) ||
                    (!birthday && initialBirthday) ||
                    (birthday &&
                        initialBirthday &&
                        !birthday.isSame(initialBirthday, "day"))) {
                    const gregorianDate = birthday
                        ? birthday.locale("en").format("YYYY-MM-DD")
                        : "";
                    updateProfileData.birthday = gregorianDate;
                    profileInfoChanged = true;
                }
                if (profileInfoChanged) {
                    const updatedProfile = await updateProfileInfoApi(updateProfileData.username ?? initialUsername, updateProfileData.phone ?? initialPhone, updateProfileData.bio ?? initialBio, updateProfileData.birthday ??
                        initialBirthday?.locale("en").format("YYYY-MM-DD") ??
                        "");
                    enqueueSnackbar("اطلاعات پروفایل با موفقیت به‌روزرسانی شد", {
                        variant: "success",
                    });
                    setInitialUsername(updatedProfile.username);
                    setInitialPhone(updatedProfile.phone);
                    setInitialBio(updatedProfile.bio);
                    setInitialBirthday(updatedProfile.birthday
                        ? jMoment(updatedProfile.birthday, "YYYY-MM-DD")
                        : null);
                    if (imageFile) {
                        setInitialProfileImage(profileImage);
                        setImageFile(null);
                    }
                }
            }
            catch (error) {
                console.error("Error updating profile:", error);
                enqueueSnackbar("خطا در به‌روزرسانی پروفایل", { variant: "error" });
            }
        }
        setIsEditing(!isEditing);
    };
    // Handle field changes
    const handleFieldChange = (event, field) => {
        const { value } = event.target;
        if (field === "phone")
            setPhone(value);
        if (field === "bio")
            setBio(value);
    };
    // Handle profile image change
    const handleImageChange = async (event) => {
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
            }
            catch (error) {
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
    const getDisplayValue = (value, placeholder) => {
        return value.trim() === "" ? placeholder : value;
    };
    return (_jsx(LocalizationProvider, { dateAdapter: AdapterMomentJalaali, children: _jsxs(Stack, { sx: {
                justifyContent: "flex-start",
                alignItems: "center",
            }, children: [_jsxs(Box, { display: "flex", flexDirection: "column", alignItems: "center", p: 3, sx: {
                        border: "1px solid #ddd",
                        borderRadius: "16px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        width: "100%",
                        maxWidth: 350,
                        minHeight: 600,
                        direction: "rtl",
                        bgcolor: "background.paper",
                    }, children: [_jsx(Box, { position: "relative", children: _jsx(Avatar, { sx: {
                                    width: 200,
                                    height: 200,
                                    border: "2px solid #ddd",
                                    objectFit: "cover",
                                }, src: profileImage, alt: "User Profile" }) }), _jsx(Box, { display: "flex", justifyContent: "flex-end", width: "100%", mt: 2, children: _jsxs(IconButton, { color: "default", "aria-label": "upload picture", component: "label", sx: { color: "gray" }, children: [_jsx("input", { hidden: true, accept: "image/*", type: "file", onChange: handleImageChange }), _jsx(PhotoCamera, {})] }) }), _jsx(Divider, { sx: { width: "100%", mb: 4 } }), _jsx(Box, { display: "flex", alignItems: "center", width: "100%", justifyContent: "center", mb: 2, sx: { gap: 2 }, children: isEditing ? (_jsx(TextField, { value: username, onChange: (e) => setUsername(e.target.value), size: "small", variant: "outlined", sx: {
                                    flexGrow: 1,
                                    width: "100%",
                                    maxWidth: 250,
                                    height: 40,
                                }, InputProps: {
                                    sx: {
                                        "& .MuiInputBase-input": {
                                            textAlign: "center",
                                        },
                                    },
                                } })) : (_jsx(Typography, { variant: "body1", sx: {
                                    flexGrow: 1,
                                    width: "100%",
                                    maxWidth: 250,
                                    height: 40,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: "bold",
                                }, children: getDisplayValue(username, "نام کاربری") })) }), _jsx(Box, { display: "flex", alignItems: "center", width: "100%", justifyContent: "center", mb: 2, sx: { gap: 2 }, children: isEditing ? (_jsx(TextField, { value: phone, onChange: (e) => handleFieldChange(e, "phone"), size: "small", variant: "outlined", sx: {
                                    flexGrow: 1,
                                    width: "100%",
                                    maxWidth: 250,
                                    height: 40,
                                }, InputProps: {
                                    sx: {
                                        "& .MuiInputBase-input": {
                                            textAlign: "center",
                                        },
                                    },
                                } })) : (_jsx(Typography, { variant: "body1", sx: {
                                    flexGrow: 1,
                                    width: "100%",
                                    maxWidth: 250,
                                    height: 40,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }, children: getDisplayValue(phone, "شماره همراه") })) }), _jsx(Box, { display: "flex", alignItems: "center", width: "83.9%", justifyContent: "center", mb: 2, sx: { gap: 2 }, children: isEditing ? (_jsx(DatePicker, { value: birthday, onChange: (newValue) => {
                                    setBirthday(newValue);
                                }, renderInput: (params) => (_jsx(TextField, { ...params, size: "small", variant: "outlined", sx: {
                                        flexGrow: 1,
                                        width: "100%",
                                        maxWidth: 250,
                                        height: 40,
                                        "& .MuiInputBase-input": {
                                            textAlign: "center",
                                        },
                                    } })), PaperProps: {
                                    sx: {
                                        width: 200,
                                        margin: "0 auto",
                                    },
                                }, PopperProps: {
                                    sx: {
                                        "& .MuiPaper-root": {
                                            width: 250,
                                            margin: "0 auto",
                                            left: "50% !important",
                                            transform: "translateX(-50%) !important",
                                        },
                                    },
                                } })) : (_jsx(Typography, { variant: "body1", sx: {
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
                                }, children: birthday ? birthday.format("jYYYY/jMM/jDD") : "تاریخ تولد" })) }), _jsx(Box, { display: "flex", alignItems: "center", width: "100%", justifyContent: "center", mb: 2, sx: { gap: 2 }, children: isEditing ? (_jsx(TextField, { value: bio, onChange: (e) => handleFieldChange(e, "bio"), size: "small", variant: "outlined", multiline: true, minRows: 3, maxRows: 10, sx: {
                                    flexGrow: 1,
                                    width: "100%",
                                    maxWidth: 250,
                                    "& .MuiInputBase-input": {
                                        wordBreak: "break-word",
                                        overflowWrap: "break-word",
                                    },
                                } })) : (_jsx(Typography, { variant: "body1", sx: {
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
                                }, children: getDisplayValue(bio, "بیو") })) }), _jsx(Box, { display: "flex", justifyContent: "flex-end", width: "100%", mt: 2, children: _jsx(IconButton, { size: "small", onClick: handleToggleEdit, sx: { color: "gray" }, children: isEditing ? (_jsx(CheckIcon, { fontSize: "small" })) : (_jsx(EditIcon, { fontSize: "small" })) }) })] }), _jsxs(Box, { display: "flex", flexDirection: "column", alignItems: "center", width: "100%", py: 3, sx: {
                        direction: "rtl",
                    }, children: [_jsx(Box, { display: "flex", alignItems: "center", width: "100%", justifyContent: "center", mb: 2, sx: {
                                border: "1px solid #ddd",
                                borderRadius: "16px",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                width: "100%",
                                maxWidth: 350,
                                minHeight: 50,
                                direction: "rtl",
                                bgcolor: "background.paper",
                            }, children: _jsxs(Typography, { variant: "body1", sx: {
                                    flexGrow: 1,
                                    width: "100%",
                                    maxWidth: 250,
                                    height: 40,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }, children: [email || "ایمیل تعریف نشده", " "] }) }), _jsxs(Box, { display: "flex", flexDirection: "column", alignItems: "center", gap: 2, width: "100%", maxWidth: 350, mt: 2, children: [_jsx(PrimaryGrayButton, { text: "\u062A\u063A\u06CC\u06CC\u0631 \u0627\u06CC\u0645\u06CC\u0644", onClick: () => {
                                        navigate("/change-email");
                                    }, width: "300px" }), _jsx(PrimaryGrayButton, { text: "\u062A\u063A\u06CC\u06CC\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631", onClick: () => {
                                        navigate("/change-pass");
                                    }, width: "300px" })] })] })] }) }));
};
export default ProfileBox;
