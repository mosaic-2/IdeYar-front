import { Box, Typography } from "@mui/material";

interface Prop {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCardProfile = ({ title, description, imageUrl }: Prop) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      mb={2}
      sx={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        width: "100%",
        bgcolor: "background.default",
        direction: "rtl", // Set text direction to RTL
      }}
    >
      {/* Image Section without Padding */}
      <Box
        sx={{
          width: "25%",
          height: "200px", // Set a fixed height for the image section
          overflow: "hidden",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>

      {/* Text Section with Padding */}
      <Box flex="1" p={2}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCardProfile;
