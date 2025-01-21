import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { ThemeProvider } from "@mui/material/styles";
import { lightModeTheme } from "../theme/useTheme";
import "@testing-library/jest-dom";
test("renders a button with the correct text", () => {
    render(_jsx(ThemeProvider, { theme: lightModeTheme, children: _jsx(PrimaryButton, { text: "Click Me" }) }));
    expect(screen.getByRole("button", { name: /Click Me/i })).toBeInTheDocument();
});
