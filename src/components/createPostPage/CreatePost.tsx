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
import { ChangeEvent } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import checkLogin from "../../hooks/checkLogin";

interface PostInfo {
  title: string | null;
  text: string | null;
  fund: string | null;
  date: string | null;
  category: string | null;
  imageFile: File | null;
  imagePreview: string | null;
  sections: PostSection[];
}

export interface PostSection {
  order: number | null;
  title: string | null;
  text: string | null;
  imageFile: File | null;
  imagePreview: string | null;
}

const CreatePost = () => {
  const [post, updatePost] = useImmer<PostInfo>({
    title: null,
    text: null,
    fund: null,
    date: null,
    category: null,
    imageFile: null,
    imagePreview: null,
    sections: [],
  });
  const [creating, setCreating] = useImmer(false);

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  checkLogin();

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const handleTitleChange = (t: string) => {
    updatePost((draft: PostInfo) => {
      draft.title = t;
    });
  };

  const handleTextChange = (t: string) => {
    updatePost((draft: PostInfo) => {
      draft.text = t;
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      updatePost((draft: PostInfo) => {
        draft.imageFile = file;
        draft.imagePreview = URL.createObjectURL(file);
      });
    }
  };

  const handleFundChange = (f: string) => {
    updatePost((draft: PostInfo) => {
      draft.fund = f;
    });
  };

  const handleDateChange = (d: string) => {
    updatePost((draft: PostInfo) => {
      draft.date = d;
    });
  };

  const handleCategoryChange = (s: string) => {
    updatePost((draft: PostInfo) => {
      draft.category = s;
    });
  };

  const handleAddSection = () => {
    updatePost((draft: PostInfo) => {
      draft.sections.push({
        order: draft.sections.length,
        title: null,
        text: null,
        imageFile: null,
        imagePreview: null,
      });
    });
  };

  const handleSectionChange = (index: number, newSection: PostSection) => {
    updatePost((draft: PostInfo) => {
      draft.sections[index] = newSection;
    });
  };

  const handleSubmit = () => {
    if (!post.imageFile) {
      enqueueSnackbar("باید برای پروژه عکس اصلی انتخاب شود", {
        variant: "error",
      });
      return;
    }
    if (!post.title) {
      enqueueSnackbar("عنوان پروژه نمیتواند خالی باشد", {
        variant: "error",
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
    createPost(
      post.imageFile,
      post.title,
      post.text || "",
      post.fund || "",
      post.date || "",
      post.category
    )
      .then(({ id }) => {
        console.log("Post created. id: {}", id);
        async function uploadPostDetails() {
          for (let index = 0; index < post.sections.length; index++) {
            const section = post.sections[index];
            try {
              await createPostDetail(
                section.imageFile,
                section.title,
                section.text,
                index + 1,
                id.toString()
              );
              console.log("Post detail added. order: ", index + 1);
            } catch (error) {
              console.error("Post detail add failed:", error);
            }
          }
          setCreating(false);
          enqueueSnackbar("پروژه با موفقیت ایجاد شد.", { variant: "success" });
          navigate(`/post/${id}`);
        }
        uploadPostDetails();
      })
      .catch((error) => {
        setCreating(false);
        enqueueSnackbar("خطا در ایجاد پروژه", { variant: "error" });
        console.error("CreatePost failed:", error);
      });
  };

  return (
    <div dir="rtl">
      <CacheProvider value={cacheRtl}>
        <SimpleLayout>
          <Stack
            direction="column"
            spacing={2}
            sx={{
              paddingX: "20%",
              mt: 2,
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "stretch",
            }}
          >
            <MainTitlePart
              imagePreview={post.imagePreview}
              onImageChange={handleImageChange}
              onTitleChange={handleTitleChange}
              onTextChange={handleTextChange}
            />
            {post.sections.map((section: PostSection, i: number) => (
              <SectionPart
                key={i}
                index={i}
                section={section}
                onChangeSection={handleSectionChange}
              />
            ))}
            <AddNewSectionPart onAdd={handleAddSection} />
            <DetailsPart
              onFundChange={handleFundChange}
              onDateChange={handleDateChange}
              onCategoryChange={handleCategoryChange}
              onSubmit={handleSubmit}
              creating={creating}
            />
          </Stack>
        </SimpleLayout>
      </CacheProvider>
    </div>
  );
};

export default CreatePost;
