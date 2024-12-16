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

interface PostInfo {
  title: string | null;
  text: string | null;
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
    image: null,
    sections: [],
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

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
            <MainTitlePart />
            {post.sections.map((section: PostSection, i: number) => (
              <SectionPart
                key={i}
                index={i}
                section={section}
                onChangeSection={handleSectionChange}
              />
            ))}
            <AddNewSectionPart onAdd={handleAddSection} />
            <DetailsPart />
          </Stack>
        </SimpleLayout>
      </CacheProvider>
    </div>
  );
};

export default CreatePost;
