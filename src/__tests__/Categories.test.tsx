import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { lightModeTheme } from "../theme/useTheme";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import CategoryGrid from "../components/categories/Categories";

// Mock useNavigate
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("CategoryGrid Component", () => {
  const categories = [
    { icon: expect.anything(), label: "هنر" },
    { icon: expect.anything(), label: "ویدئو" },
    { icon: expect.anything(), label: "پروژه‌ها" },
    { icon: expect.anything(), label: "طراحی" },
    { icon: expect.anything(), label: "سرامیک" },
    { icon: expect.anything(), label: "هنر مفهومی" },
    { icon: expect.anything(), label: "هنر دیجیتال" },
    { icon: expect.anything(), label: "تصویرسازی" },
    { icon: expect.anything(), label: "نصب" },
  ];

  beforeEach(() => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={lightModeTheme}>
          <CategoryGrid />
        </ThemeProvider>
      </BrowserRouter>
    );
  });

  test("renders all category buttons", () => {
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(categories.length);
  });

  test("displays correct labels for all categories", () => {
    categories.forEach((category) => {
      expect(screen.getByText(category.label)).toBeInTheDocument();
    });
  });

  test("navigates to search page with category state when clicked", () => {
    const firstButton = screen.getAllByRole("button")[0];
    fireEvent.click(firstButton);

    expect(mockedUsedNavigate).toHaveBeenCalledWith("/search", {
      state: { selectedCategory: categories[0].label },
    });
  });

  test("renders all category icons", () => {
    const iconButtons = screen.getAllByRole("button");
    expect(iconButtons.length).toBe(categories.length);

    // Verify that each IconButton contains an SVG (MUI icon)
    iconButtons.forEach((button) => {
      expect(button.querySelector("svg")).toBeInTheDocument();
    });
  });
});
