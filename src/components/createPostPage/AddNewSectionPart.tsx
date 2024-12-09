import { Box, Stack } from "@mui/material";
import PrimaryGrayButton from "../buttons/PrimaryGrayButton";
import { useTranslation } from "react-i18next";

interface Prop {
  onAdd: () => void;
}

const AddNewSectionPart = ({ onAdd }: Prop) => {
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
      <Box bgcolor="border.sGray" sx={{ height: 2, width: "100%" }} />
      <PrimaryGrayButton text={t("button.AddNewSection")} onClick={onAdd} />
    </Stack>
  );
};

export default AddNewSectionPart;
