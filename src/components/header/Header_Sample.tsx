import {
  Box,
  CssBaseline,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DarkModeButton from "../buttons/DarkModeButton";
import UserButton from "./UserButton";
import MenuIcon from "@mui/icons-material/Menu";
import SecondaryButton from "../buttons/SecondaryButton";

const Header = () => {
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginX={breakpoint ? 7.5 : 1}
          paddingX={1.5}
          paddingY={1.75}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <UserButton />
            <DarkModeButton />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            {breakpoint && (
              <SecondaryButton text="فرصت همکاری" badge="به زودی" />
            )}
            {breakpoint && <SecondaryButton text="بلاگ" />}
            {breakpoint && <SecondaryButton text="درباره ما" />}
            {breakpoint && <SecondaryButton text="محصولات" />}
            {!breakpoint && <MenuIcon sx={{ color: "button.tGrayFg" }} />}
          </Stack>
        </Stack>
        <Box height="0.5px" bgcolor="border.sGray" />
      </Box>
    </>
  );
};

export default Header;
