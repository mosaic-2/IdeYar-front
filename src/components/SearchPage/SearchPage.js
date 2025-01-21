import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import PostPreview from "../../pages/PreviewPage/PostPreview";
import PrimaryButton from "../buttons/PrimaryButton";
import { searchPostsApi } from "../../apis/searchPostsApi";
import SingleTextField from "../textField/singleTextField";
import MultipleSelectChip from "../textField/multipleTextField";
// type Post = {
//   description: string;
//   id: string;
//   image: string;
//   profileImageUrl: string;
//   title: string;
//   userId: string;
//   username: string;
// };
const SearchPage = () => {
    const location = useLocation();
    const selectedCategoryFromNav = location.state?.selectedCategory || null;
    const [selectedCategories, setSelectedCategories] = useState(selectedCategoryFromNav ? [selectedCategoryFromNav] : []);
    const handleCategoriesChange = (categories) => {
        console.log("Selected Categories:", categories);
        setSelectedCategories(categories);
    };
    const [searchedPosts, setSearchedPosts] = useState(null);
    const searchObject = useParams().object;
    useEffect(() => {
        if (searchObject) {
            console.log("Triggering API call for:", searchObject);
            searchPostsApi(searchObject, 0)
                .then((response) => {
                console.log("here");
                console.log("API Response:", response);
                if (response) {
                    console.log("Posts:", response);
                    setSearchedPosts(response);
                }
            })
                .catch((err) => {
                console.log("API Error:", err);
            });
        }
    }, [searchObject]);
    return (_jsxs(Box, { display: "flex", flexDirection: "row", py: 5, gap: searchedPosts?.posts.length || 0 > 0 ? 20 : 10, justifyContent: "center", children: [_jsxs(Box, { py: 2, display: "flex", flexDirection: "column", sx: {
                    direction: "rtl",
                    border: "2px solid",
                    borderRadius: "20px",
                    borderColor: "border.sGray",
                }, height: "300px", width: "300px", justifyContent: "space-between", alignItems: "center", children: [_jsxs(Box, { display: "flex", flexDirection: "column", gap: 2, children: [_jsx(SingleTextField, { selects: ["محبوب ترین", "جدیدترین", "قدیمی ترین", "پر بازدیدترین"] }), _jsx(MultipleSelectChip, { categories: selectedCategories, onCategoriesChange: handleCategoriesChange })] }), _jsx(PrimaryButton, { height: "40px", width: "260px", text: "\u0627\u0639\u0645\u0627\u0644 \u0641\u06CC\u0644\u062A\u0631\u0647\u0627" })] }), searchedPosts ? (_jsx(Box, { display: "flex", flexDirection: "column", gap: 2, children: searchedPosts.posts.map((post, index) => (_jsx(PostPreview, { id: 1, username: post.username, description: post.description, title: post.title, image: post.image, minimumFund: "10000", fundRaised: "100" }, index))) })) : (_jsx(Box, { width: "980px", justifyContent: "center", alignItems: "center", display: "flex", children: _jsx(CircularProgress, {}) }))] }));
};
export default SearchPage;
