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
import { createPost, uploadPostImage } from "../../apis/createPostApi";
import { ChangeEvent } from "react";

interface PostInfo {
  title: string | null;
  text: string | null;
  fund: string | null;
  date: string | null;
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
    imageFile: null,
    imagePreview: null,
    sections: [],
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const handleTitleChange = (t: string) => {
    updatePost((draft: PostInfo) => {
      draft.title = t;
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
    const request = {
      title: post.title !== null ? post.title : "",
      deadline_date: post.date !== null ? post.date : "",
      minimum_fund: post.fund !== null ? post.fund : "",
      post_details: post.sections.map((section, index) => {
        return {
          title: section.title !== null ? section.title : "",
          description: section.text !== null ? section.text : "",
          order: index + 1,
        };
      }),
    };
    createPost(request)
      .then(({ id }) => {
        console.log("Post created. id: {}", id);
        if (post.imageFile)
          uploadPostImage(post.imageFile, 0, id)
            .then(() => {
              console.log("Post image uploaded. order: {}", 0);
            })
            .catch((error) => console.error("UploadPostImage failed:", error));
        for (let index = 0; index < post.sections.length; index++) {
          const section = post.sections[index];
          if (section.imageFile) {
            uploadPostImage(section.imageFile, index + 1, id)
              .then(() => {
                console.log("Post image uploaded. order: {}", index + 1);
              })
              .catch((error) =>
                console.error("UploadPostImage failed:", error)
              );
          }
        }
      })
      .catch((error) => console.error("CreatePost failed:", error));
  };

  return (
    <div dir="rtl">
      <CacheProvider value={cacheRtl}>
        <SimpleLayout>
          <Stack
            direction="column"
            spacing={2}
            sx={{
              paddingX: 10,
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
              onSubmit={handleSubmit}
            />
          </Stack>
        </SimpleLayout>
      </CacheProvider>
    </div>
  );
};

export default CreatePost;
