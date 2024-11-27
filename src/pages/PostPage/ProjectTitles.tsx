import { Box, Card, Typography } from "@mui/material";

interface Props {
  titles: string[];
  onTitleClick: (index: number) => void; // New prop for handling clicks
}

const ProjectTitles = ({ titles, onTitleClick }: Props) => {
  return (
    <Card
      sx={{
        boxShadow: "xs",
        width: "100%",
        maxWidth: 300,
        border: "1px solid",
        borderColor: "border.sGray",
        borderRadius: "15px",
        justifyContent: "center",
        direction: "rtl",
        p: 3,
      }}
    >
      {titles.map((title, index) => (
        <Box
          key={index} // Add a unique key
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap={1.5}
          mb={1}
          onClick={() => onTitleClick(index)} // Handle click
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "brand.500",
            },
          }}
        >
          <Box
            borderRadius={100}
            width="15px"
            height="15px"
            border="1px solid"
            borderColor="brand.500"
          />
          <Typography variant="body2" fontWeight="bold">
            {title}
          </Typography>
        </Box>
      ))}
    </Card>
  );
};

export default ProjectTitles;
