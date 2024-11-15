import { Box, Typography } from "@mui/material";
import PrimaryButton from "../buttons/PrimaryButton";
import ProjectCardProfile from "./ProjectCardProfile";

// Sample project data for demonstration purposes
// const myProjects = []; // Adjust this array to add actual project data
// const mySupports = []; // Adjust this array to add actual support data

const myProjects = [
  {
    name: "پروژه شماره ۱",
    description: "این پروژه شامل توسعه یک برنامه موبایل است.",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    name: "پروژه شماره ۲",
    description: "این پروژه مربوط به طراحی یک وبسایت است.",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    name: "پروژه شماره ۳",
    description: "پروژه ای برای تحقیق و توسعه در حوزه هوش مصنوعی.",
    imageUrl: "https://via.placeholder.com/200",
  },
];

const mySupports = [
  {
    name: "حمایت از پروژه محیط زیست",
    description: "کمک به پروژه‌ای که روی حفاظت از جنگل‌ها تمرکز دارد.",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    name: "حمایت از پروژه آموزشی",
    description: "پروژه‌ای که هدفش آموزش به کودکان مناطق محروم است.",
    imageUrl: "https://via.placeholder.com/200",
  },
];

const ProjectsBox = () => {
  return (
    <>
      {/* Section Title for My Projects */}
      <Box
        display="flex"
        alignItems="start"
        sx={{
          direction: "rtl",
          border: "1px solid #ddd",
          borderRadius: "50px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          bgcolor: "background.paper",
          width: "100%",
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ mx: 2, my: 1 }}>
          پروژه های من
        </Typography>
      </Box>

      {/* My Projects List or Message */}
      <Box p={2} sx={{ height: "50%" }}>
        {myProjects.length === 0 ? (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 2, textAlign: "center" }}
          >
            .شما هیچ پروژه ای ندارید
          </Typography>
        ) : (
          myProjects.map((project, index) => (
            <ProjectCardProfile
              key={index}
              title={project.name || "عنوان پروژه"}
              description={project.description || "توضیحات پروژه"}
              imageUrl={project.imageUrl || "https://via.placeholder.com/200"}
            />
          ))
        )}

        {/* Add Project Button */}
        <Box display="flex" justifyContent="center" mt={2}>
          <PrimaryButton
            text="افزودن پروژه"
            width="200px"
            onClick={() => {
              console.log("Add Project button clicked");
              // Implement the action for adding a project
            }}
          />
        </Box>
      </Box>

      {/* Section Title for My Supports */}
      <Box
        display="flex"
        alignItems="start"
        mt="50px"
        sx={{
          direction: "rtl",
          border: "1px solid #ddd",
          borderRadius: "50px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          bgcolor: "background.paper",
          width: "100%",
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ mx: 2, my: 1 }}>
          حمایت های من
        </Typography>
      </Box>

      {/* My Supports List or Message */}
      <Box p={2} sx={{ height: "50%" }}>
        {mySupports.length === 0 ? (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 2, textAlign: "center" }}
          >
            .شما از هیچ پروژه ای حمایت نکردین
          </Typography>
        ) : (
          mySupports.map((support, index) => (
            <ProjectCardProfile
              key={index}
              title={support.name || "عنوان پروژه"}
              description={support.description || "توضیحات پروژه"}
              imageUrl={support.imageUrl || "https://via.placeholder.com/200"}
            />
          ))
        )}
      </Box>
    </>
  );
};

export default ProjectsBox;
