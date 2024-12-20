import { Box, Collapse, Stack, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import UploadImageButton from "../buttons/UploadImageButton";
import { toPersianDigits } from "../../util/persianNumberConverter";
import { PostSection } from "./CreatePost";
import { useEffect, useState } from "react";
import { debounce } from "lodash";

interface Prob {
  index: number;
  section: PostSection;
  onChangeSection: (index: number, newSection: PostSection) => void;
}

const SectionPart = ({ index, section, onChangeSection }: Prob) => {
  const { t } = useTranslation();
  const [isNew, setNew] = useState<boolean>(true);

  useEffect(() => {
    if (isNew) {
      const timeout = setTimeout(() => {
        setNew(false);
      }, 10);

      return () => clearTimeout(timeout);
    }
  }, []);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeSection(index, { ...section, title: event.target.value });
  };

  const handleTextChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChangeSection(index, { ...section, text: event.target.value });
    },
    300
  );

  return (
    <Collapse in={!isNew} timeout="auto" unmountOnExit>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "flex-start",
          alignItems: "stretch",
        }}
      >
        <Box bgcolor="border.sGray" sx={{ height: 2, width: "100%" }} />
        <Typography variant="h6" color="text.tertiary">
          {t("createPost.section")}{" "}
          {section.order == null
            ? ""
            : toPersianDigits((section.order + 1).toString())}
        </Typography>
        <TextField
          dir="rtl"
          label={t("field.title")}
          variant="outlined"
          size="small"
          onChange={handleTitleChange}
        />
        <TextField
          dir="rtl"
          label={t("field.text")}
          variant="outlined"
          size="small"
          onChange={(e) => {
            e.persist();
            handleTextChange(e);
          }}
          multiline
          rows={10}
        />
        <Stack
          sx={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <UploadImageButton />
        </Stack>
      </Stack>
    </Collapse>
  );
};

export default SectionPart;
