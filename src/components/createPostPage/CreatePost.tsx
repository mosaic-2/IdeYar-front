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
import { useCreatePost } from "../../hooks/handleCreatePost";

interface PostInfo {
  title: string | null;
  text: string | null;
  fund: string | null;
  date: string | null;
  image: string | null;
  sections: PostSection[];
}

export interface PostSection {
  order: number | null;
  title: string | null;
  text: string | null;
  image: string | null;
}

const CreatePost = () => {
  const [post, updatePost] = useImmer<PostInfo>({
    title: null,
    text: null,
    fund: null,
    date: null,
    image: null,
    sections: [],
  });
  const { handleCreatePost } = useCreatePost();

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const handleTitleChange = (t: string) => {
    updatePost((draft: PostInfo) => {
      draft.title = t;
    });
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
        image: null,
      });
    });
  };

  const handleSectionChange = (index: number, newSection: PostSection) => {
    updatePost((draft: PostInfo) => {
      draft.sections[index] = newSection;
    });
  };

  const handleSubmit = () => {
    handleCreatePost({
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
              paddingX: 10,
              mt: 2,
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "stretch",
            }}
          >
            <MainTitlePart onTitleChange={handleTitleChange} />
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
