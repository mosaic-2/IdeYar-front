import { Stack } from "@mui/material";
import SimpleLayout from "../layouts/SimpleLayout";
import DetailsPart from "./DetailsPart";
import MainTitlePart from "./MainTitlePart";
import AddNewSectionPart from "./AddNewSectionPart";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useState } from "react";
import PostInfo from "../../models/PostInfo";
import SectionPart from "./SectionPart";
import PostSection from "../../models/PostSection";

const CreatePost = () => {
  const [post, setPost] = useState<PostInfo>({
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
    setPost((prevPost) => ({
      ...prevPost,
      sections: [
        ...prevPost.sections,
        {
          order: prevPost.sections.length,
          title: null,
          text: null,
          image: null,
        },
      ],
    }));
  };

  const handleSectionChange = (index: number, newSection: PostSection) => {
    setPost((prevPost) => ({
      ...prevPost,
      sections: prevPost.sections.map((section, i) => {
        if ((i = index)) return newSection;
        else return section;
      }),
    }));
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
            {post.sections.map((section, i) => (
              <SectionPart
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
