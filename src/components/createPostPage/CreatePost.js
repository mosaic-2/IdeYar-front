import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack } from "@mui/material";
import SimpleLayout from "../layouts/SimpleLayout";
import DetailsPart from "./DetailsPart";
import MainTitlePart from "./MainTitlePart";
import AddNewSectionPart from "./AddNewSectionPart";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import SectionPart from "./SectionPart";
import { useImmer } from "use-immer";
import { createPost, createPostDetail } from "../../apis/createPostApi";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
    const [post, updatePost] = useImmer({
        title: null,
        text: null,
        fund: null,
        date: null,
        imageFile: null,
        imagePreview: null,
        sections: [],
    });
    const [creating, setCreating] = useImmer(false);
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
    });
    const handleTitleChange = (t) => {
        updatePost((draft) => {
            draft.title = t;
        });
    };
    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            updatePost((draft) => {
                draft.imageFile = file;
                draft.imagePreview = URL.createObjectURL(file);
            });
        }
    };
    const handleFundChange = (f) => {
        updatePost((draft) => {
            draft.fund = f;
        });
    };
    const handleDateChange = (d) => {
        updatePost((draft) => {
            draft.date = d;
        });
    };
    const handleAddSection = () => {
        updatePost((draft) => {
            draft.sections.push({
                order: draft.sections.length,
                title: null,
                text: null,
                imageFile: null,
                imagePreview: null,
            });
        });
    };
    const handleSectionChange = (index, newSection) => {
        updatePost((draft) => {
            draft.sections[index] = newSection;
        });
    };
    const handleSubmit = () => {
        if (!post.imageFile) {
            enqueueSnackbar("باید برای پروژه عکس اصلی انتخاب شود", {
                variant: "success",
            });
            return;
        }
        if (!post.title) {
            enqueueSnackbar("عنوان پروژه نمیتواند خالی باشد", {
                variant: "success",
            });
            return;
        }
        const request = {
            post_details: post.sections.map((section, index) => {
                return {
                    title: section.title !== null ? section.title : "",
                    description: section.text !== null ? section.text : "",
                    order: index + 1,
                };
            }),
        };
        enqueueSnackbar("در حال ایجاد پروژه", { variant: "info" });
        setCreating(true);
        createPost(post.imageFile, post.title, post.text || "", post.fund || "", post.date || "")
            .then(({ id }) => {
            console.log("Post created. id: {}", id);
            async function uploadPostDetails() {
                for (let index = 0; index < post.sections.length; index++) {
                    const section = post.sections[index];
                    try {
                        await createPostDetail(section.imageFile, section.title, section.text, index + 1, id.toString());
                        console.log("Post detail added. order: ", index + 1);
                    }
                    catch (error) {
                        console.error("Post detail add failed:", error);
                    }
                }
                setCreating(false);
                enqueueSnackbar("پروژه با موفقیت ایجاد شد.", { variant: "success" });
                navigate(`/post/${id}`);
            }
            uploadPostDetails();
            // for (let index = 0; index < post.sections.length; index++) {
            //   const section = post.sections[index];
            //   createPostDetail(
            //     section.imageFile,
            //     section.title,
            //     section.text,
            //     index + 1,
            //     id.toString()
            //   )
            //     .then(() => {
            //       console.log("Post detail added. order: ", index + 1);
            //     })
            //     .catch((error) => console.error("Post detail add failed:", error));
            // }
        })
            .catch((error) => {
            setCreating(false);
            enqueueSnackbar("خطا در ایجاد پروژه", { variant: "error" });
            console.error("CreatePost failed:", error);
        });
    };
    return (_jsx("div", { dir: "rtl", children: _jsx(CacheProvider, { value: cacheRtl, children: _jsx(SimpleLayout, { children: _jsxs(Stack, { direction: "column", spacing: 2, sx: {
                        paddingX: "8%",
                        mt: 2,
                        width: "100%",
                        justifyContent: "flex-start",
                        alignItems: "stretch",
                    }, children: [_jsx(MainTitlePart, { imagePreview: post.imagePreview, onImageChange: handleImageChange, onTitleChange: handleTitleChange }), post.sections.map((section, i) => (_jsx(SectionPart, { index: i, section: section, onChangeSection: handleSectionChange }, i))), _jsx(AddNewSectionPart, { onAdd: handleAddSection }), _jsx(DetailsPart, { onFundChange: handleFundChange, onDateChange: handleDateChange, onSubmit: handleSubmit, creating: creating })] }) }) }) }));
};
export default CreatePost;
