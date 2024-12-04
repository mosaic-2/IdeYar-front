import { Box, Stack } from "@mui/material";
import PrimaryGrayButton from "../buttons/PrimaryGrayButton";
import { useTranslation } from "react-i18next";

const AddNewSectionPart = () => {
  const { t } = useTranslation();
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Box bgcolor="bg.secondary" sx={{ height: 3, width: "100%" }} />
      <PrimaryGrayButton text={t("button.AddNewSection")} />
    </Stack>
  );
};

export default AddNewSectionPart;
