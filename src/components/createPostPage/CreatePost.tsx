import { Box, Stack, Typography } from "@mui/material";
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
import { ChangeEvent, useRef, useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import checkLogin from "../../hooks/checkLogin";
import FeedIcon from "@mui/icons-material/Feed";
import moment from "moment-jalaali";
import StickyLeftLayout from "../layouts/StickyLeftLayout";

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
  const todayPersianDate = moment().format("jYYYY/jMM/jDD");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  checkLogin();

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const [activeSection, setActiveSection] = useState<string>("upload-cover");
  const mainTitleRef = useRef<HTMLDivElement>(null);
  const addNewSectionRef = useRef<HTMLDivElement>(null);
  const detailsPartRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    section: string
  ) => {
    setActiveSection(section);
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
  const [imageStatus, setImageStatus] = useState<"uploaded" | "not-uploaded">(
    "not-uploaded"
  );
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      updatePost((draft: PostInfo) => {
        draft.imageFile = file;
        draft.imagePreview = URL.createObjectURL(file);
      });
      setImageStatus("uploaded");
    }
  };

  const handleDeleteImage = () => {
    updatePost((draft: PostInfo) => {
      draft.imageFile = null;
      draft.imagePreview = null;
    });
    setImageStatus("not-uploaded");
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

  const handleRemoveSection = () => {
    updatePost((draft: PostInfo) => {
      if (draft.sections.length > 0) {
        draft.sections.pop();
      }
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
    <CacheProvider value={cacheRtl}>
      <StickyLeftLayout
        paddingX={16}
        leftFrame={
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              direction: "rtl",
              mt: "45px",
              borderRadius: "15px",
              bgcolor: "bg.secondary",
            }}
            width="300px"
            height="400px"
            justifyContent="space-between"
            alignItems="center"
            py={3}
          >
            <Box
              display="flex"
              flexDirection="column"
              height="200px"
              width="100%"
              gap={3}
            >
              <Box display="flex" width="100%" flexDirection="column" gap={1}>
                <Typography
                  fontWeight="bolder"
                  sx={{ textAlign: "end", px: 2, width: "100%" }}
                >
                  :تاریخ ساخت پست
                </Typography>
                <Typography
                  color="text.tertiary"
                  sx={{ textAlign: "end", px: 2, width: "100%" }}
                >
                  {todayPersianDate}
                </Typography>
              </Box>
              <Box display="flex" width="100%" flexDirection="column" gap={1}>
                <Typography
                  fontWeight="bolder"
                  sx={{ textAlign: "end", px: 2, width: "100%" }}
                >
                  :وضعیت
                </Typography>
                <Typography
                  color="text.tertiary"
                  sx={{ textAlign: "end", px: 2, width: "100%" }}
                >
                  درحال ساخت{" "}
                </Typography>
              </Box>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexDirection="column"
              width="100%"
              height="200px"
            >
              <Box
                bgcolor="border.sGray"
                sx={{ minHeight: 2, width: "100%" }}
              />
              <Typography
                fontWeight="bolder"
                sx={{
                  textAlign: "end",
                  px: 2,
                  width: "100%",
                }}
              >
                اطلاعات پست
              </Typography>
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "end",
                  px: 2,
                  color: activeSection === "upload-cover" ? "brand.400" : "",
                  cursor: "pointer",
                  borderRight:
                    activeSection === "upload-cover" ? "3px solid #64A3F6" : "",
                }}
                onClick={() => scrollToSection(mainTitleRef, "upload-cover")}
              >
                عکس اصلی پروژه
              </Typography>
              <Typography
                sx={{
                  textAlign: "end",
                  px: 2,
                  width: "100%",

                  color: activeSection === "sections" ? "brand.400" : "",

                  borderRight:
                    activeSection === "sections" ? "3px solid #64A3F6" : "",
                  cursor: "pointer",
                }}
                onClick={() => scrollToSection(addNewSectionRef, "sections")}
              >
                زیربخش‌ها
              </Typography>
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "end",
                  px: 2,
                  color: activeSection === "details" ? "brand.400" : "",
                  borderRight:
                    activeSection === "details" ? "3px solid #64A3F6" : "",
                  cursor: "pointer",
                }}
                onClick={() => scrollToSection(detailsPartRef, "details")}
              >
                اطلاعات بیشتر
              </Typography>
            </Box>
          </Box>
        }
      >
        <div dir="rtl">
          <Box
            display="flex"
            flexDirection="row"
            py={5}
            gap={20}
            justifyContent="center"
          >
            <Stack
              direction="column"
              spacing={5}
              display="flex"
              sx={{
                width: "700px",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <div
                ref={mainTitleRef}
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <MainTitlePart
                  imagePreview={post.imagePreview}
                  onImageChange={handleImageChange}
                  onDeleteImage={handleDeleteImage}
                  onTitleChange={handleTitleChange}
                  onTextChange={handleTextChange}
                  status={imageStatus}
                />
              </div>
              <div
                ref={addNewSectionRef}
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                <Box
                  bgcolor="border.sGray"
                  sx={{ minHeight: 2, width: "100%" }}
                />

                <Stack direction="row" gap={1}>
                  {" "}
                  <FeedIcon sx={{ color: "brand.400" }} />
                  <Typography fontWeight="bold">زیربخش ها</Typography>
                </Stack>
              </div>
              {post.sections.map((section: PostSection, i: number) => (
                <SectionPart
                  key={i}
                  index={i}
                  section={section}
                  onChangeSection={handleSectionChange}
                />
              ))}
              <AddNewSectionPart
                onAdd={handleAddSection}
                onRemove={handleRemoveSection}
                status={post.sections.length == 0 ? false : true}
              />
              <div
                ref={detailsPartRef}
                style={{ display: "flex", width: "100%" }}
              >
                <DetailsPart
                  onFundChange={handleFundChange}
                  onDateChange={handleDateChange}
                  onCategoryChange={handleCategoryChange}
                  onSubmit={handleSubmit}
                  creating={creating}
                />
              </div>
            </Stack>
          </Box>
        </div>
      </StickyLeftLayout>
    </CacheProvider>
  );
};

export default CreatePost;
