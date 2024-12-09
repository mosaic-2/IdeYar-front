import { Box, Stack, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import UploadImageButton from "../buttons/UploadImageButton";
import PostSection from "../../models/PostSection";
import { toPersianDigits } from "../../util/persianNumberConverter";

interface Prob {
  index: number;
  section: PostSection;
  onChangeSection: (index: number, newSection: PostSection) => void;
}

const SectionPart = ({ index, section, onChangeSection }: Prob) => {
  const { t } = useTranslation();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeSection(index, { ...section, title: event.target.value });
  };

  return (
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
        label={t("field.mainTitle")}
        variant="outlined"
        size="small"
      />
      <TextField
        dir="rtl"
        label={t("field.subTitle")}
        variant="outlined"
        size="small"
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
  );
};

export default SectionPart;
