import {
  Box,
  Collapse,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import UploadImageButton from "../buttons/UploadImageButton";
import { toPersianDigits } from "../../util/persianNumberConverter";
import { PostSection } from "./CreatePost";
import { ChangeEvent, useEffect, useState } from "react";
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
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onChangeSection(index, { ...section, text: event.target.value });
    },
    300
  );

  return (
    <Collapse in={!isNew} timeout="auto" unmountOnExit sx={{ width: "100%" }}>
      <Stack
        direction="column"
        spacing={3}
        sx={{
          justifyContent: "flex-start",
          alignItems: "stretch",
        }}
      >
        <Typography fontWeight="bold">
          {t("createPost.section")}{" "}
          {section.order == null
            ? ""
            : toPersianDigits((section.order + 1).toString())}
        </Typography>

        <Box width="700px" height="450px">
          {section.imagePreview && (
            <Box display="flex" flexDirection="column" gap={2}>
              <Box textAlign="center" display="flex" flexDirection="column">
                <img
                  src={section.imagePreview}
                  width="700px"
                  height="400px"
                  alt="Selected"
                  style={{
                    borderRadius: 20,
                  }}
                />
              </Box>
              <UploadImageButton
                imagePreview={section.imagePreview}
                onChange={(e, isRemoved) => {
                  if (isRemoved) {
                    onChangeSection(index, {
                      ...section,
                      imageFile: null,
                      imagePreview: null,
                    });
                  } else {
                    const file = e.target.files?.[0];
                    if (file) {
                      onChangeSection(index, {
                        ...section,
                        imageFile: file,
                        imagePreview: URL.createObjectURL(file),
                      });
                    }
                  }
                }}
                status="uploaded"
              />
            </Box>
          )}
          {!section.imagePreview && (
            <Box gap={2} display="flex" flexDirection="column">
              {" "}
              <Box
                bgcolor="bg.secondary"
                sx={{
                  height: "400px",
                  borderRadius: 4,
                }}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <UploadImageButton
                  imagePreview={section.imagePreview}
                  onChange={(e, isRemoved) => {
                    if (isRemoved) {
                      onChangeSection(index, {
                        ...section,
                        imageFile: null,
                        imagePreview: null,
                      });
                    } else {
                      const file = e.target.files?.[0];
                      if (file) {
                        onChangeSection(index, {
                          ...section,
                          imageFile: file,
                          imagePreview: URL.createObjectURL(file),
                        });
                      }
                    }
                  }}
                  status="not-uploaded"
                />
              </Box>
            </Box>
          )}
        </Box>

        <Stack direction="row" gap={0.5}>
          <Typography fontWeight="bold" color="text.tertiary">
            {t("عنوان زیربخش")}{" "}
            {section.order == null
              ? ""
              : toPersianDigits((section.order + 1).toString())}
          </Typography>
        </Stack>
        <TextField
          dir="rtl"
          placeholder="عنوان"
          hiddenLabel
          variant="filled"
          size="medium"
          onChange={handleTitleChange}
        />

        <Stack direction="row" gap={0.5}>
          <Typography fontWeight="bold" color="text.tertiary">
            {t("کپشن زیربخش")}{" "}
            {section.order == null
              ? ""
              : toPersianDigits((section.order + 1).toString())}
          </Typography>
        </Stack>
        <TextField
          dir="rtl"
          hiddenLabel
          placeholder={t("field.text")}
          variant="filled"
          size="medium"
          onChange={(e) => {
            e.persist();
            handleTextChange(e);
          }}
          multiline
          rows={5}
        />
      </Stack>
    </Collapse>
  );
};

export default SectionPart;
