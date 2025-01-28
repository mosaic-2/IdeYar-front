import { Box, Button, Stack, Typography } from "@mui/material";
import PrimaryGrayButton from "../buttons/PrimaryGrayButton";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../buttons/PrimaryButton";

interface Prop {
  onAdd: () => void;
  onRemove: () => void;
  status: boolean;
}

const AddNewSectionPart = ({ onAdd, onRemove, status }: Prop) => {
  const { t } = useTranslation();
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        justifyContent: "flex-start",
        alignItems: "start",
      }}
      display="flex"
      width="100%"
    >
      <Stack gap={1} direction="row">
        <Button
          variant="contained"
          sx={{
            bgcolor: "brand.400",
            width: "140px",
          }}
          onClick={onAdd}
        >
          {t("button.AddNewSection")}
        </Button>
        {status && (
          <Button
            variant="text"
            color="error"
            sx={{
              width: "120px",
            }}
            onClick={onRemove}
          >
            {t("button.removeLastSection")}
          </Button>
        )}
      </Stack>
      <Box sx={{ bgcolor: "border.sGray", width: "100%", minHeight: 2 }} />
    </Stack>
  );
};

export default AddNewSectionPart;
