import { Stack } from "@mui/material";
import SimpleLayout from "../layouts/SimpleLayout";
import DetailsPart from "./DetailsPart";
import MainTitlePart from "./MainTitlePart";
import AddNewSectionPart from "./AddNewSectionPart";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider, ThemeProvider, useTheme } from "@emotion/react";
import createCache from "@emotion/cache";

const CreatePost = () => {
  const theme = useTheme();

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

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
            <AddNewSectionPart />
            <DetailsPart />
          </Stack>
        </SimpleLayout>
      </CacheProvider>
    </div>
  );
};

export default CreatePost;
