import { Box, Grid, Typography } from "@mui/material";
import {
  brand,
  complementary,
  error,
  grayDarkMode,
  grayLightMode,
  success,
  warning,
} from "../../theme/colors";

const ColorDisplay = () => {
  return (
    <Box>
      <Typography>grayLightMode</Typography>
      <Grid container spacing={1}>
        {Object.entries(grayLightMode).map(([key, color]) => (
          <Grid item xs={1}>
            <Box width="100%" height={100} bgcolor={color} />
            <Typography>
              {key} : {color}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Typography>grayDarkMode</Typography>
      <Grid container spacing={1}>
        {Object.entries(grayDarkMode).map(([key, color]) => (
          <Grid item xs={1}>
            <Box width="100%" height={100} bgcolor={color} />
            <Typography>
              {key} : {color}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Typography>brand</Typography>
      <Grid container spacing={1}>
        {Object.entries(brand).map(([key, color]) => (
          <Grid item xs={1}>
            <Box width="100%" height={100} bgcolor={color} />
            <Typography>
              {key} : {color}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Typography>complementary</Typography>
      <Grid container spacing={1}>
        {Object.entries(complementary).map(([key, color]) => (
          <Grid item xs={1}>
            <Box width="100%" height={100} bgcolor={color} />
            <Typography>
              {key} : {color}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Typography>error</Typography>
      <Grid container spacing={1}>
        {Object.entries(error).map(([key, color]) => (
          <Grid item xs={1}>
            <Box width="100%" height={100} bgcolor={color} />
            <Typography>
              {key} : {color}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Typography>success</Typography>
      <Grid container spacing={1}>
        {Object.entries(success).map(([key, color]) => (
          <Grid item xs={1}>
            <Box width="100%" height={100} bgcolor={color} />
            <Typography>
              {key} : {color}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Typography>warning</Typography>
      <Grid container spacing={1}>
        {Object.entries(warning).map(([key, color]) => (
          <Grid item xs={1}>
            <Box width="100%" height={100} bgcolor={color} />
            <Typography>
              {key} : {color}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ColorDisplay;
