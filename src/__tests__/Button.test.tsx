import { render, screen } from "@testing-library/react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { ThemeProvider } from "@mui/material/styles";
import { lightModeTheme } from "../theme/useTheme";

test("renders a button with the correct text", () => {
  render(
    <ThemeProvider theme={lightModeTheme}>
      <PrimaryButton text="Click Me" />
    </ThemeProvider>
  );
  expect(screen.getByRole("button", { name: /Click Me/i })).toBeInTheDocument();
});
