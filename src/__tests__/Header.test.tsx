import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import { lightModeTheme } from "../theme/useTheme";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import sessionReducer from "../store/sessionSlice";
import "@testing-library/jest-dom";
import Header from "../components/header/Header";
import userEvent from "@testing-library/user-event";

// Mock dependencies
jest.mock("../components/buttons/DarkModeButton", () => ({
  __esModule: true,
  default: () => <div data-testid="dark-mode-button-mock" />,
}));

jest.mock("../components/logo/Logo", () => ({
  __esModule: true,
  default: () => <div data-testid="logo-mock" />,
}));

jest.mock("../components/header/UserButton", () => ({
  __esModule: true,
  default: () => <div data-testid="header-button-mock" />,
}));

// Mock react-router-dom navigation
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

// Type definitions
type TestState = {
  session: ReturnType<typeof sessionReducer>;
};

// Store configuration
const createTestStore = (preloadedState?: TestState) => {
  return configureStore({
    reducer: {
      session: sessionReducer,
    },
    preloadedState,
  });
};

// Custom render function
const renderHeader = (store: ReturnType<typeof createTestStore>) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={lightModeTheme}>
        <Provider store={store}>
          <Header />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe("Header Component with Real Store", () => {
  let store: ReturnType<typeof createTestStore>;

  beforeEach(() => {
    mockNavigate.mockReset();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("shows login button when not authenticated", () => {
    store = createTestStore({
      session: { isLoggedIn: false, jwtToken: null, refreshToken: null },
    });

    renderHeader(store);

    expect(screen.getByText("ورود")).toBeInTheDocument();
    expect(screen.queryByText("خروج")).not.toBeInTheDocument();
  });

  test("shows logout button and user button when authenticated", () => {
    store = createTestStore({
      session: {
        isLoggedIn: true,
        jwtToken: "jwtToken",
        refreshToken: "refreshToken",
      },
    });

    renderHeader(store);

    expect(screen.getByText("خروج")).toBeInTheDocument();
    expect(screen.getByTestId("header-button-mock")).toBeInTheDocument();
    expect(screen.queryByText("ورود")).not.toBeInTheDocument();
  });

  test("dispatches clearSession on logout click", async () => {
    store = createTestStore({
      session: {
        isLoggedIn: true,
        jwtToken: "jwtToken",
        refreshToken: "refreshToken",
      },
    });

    renderHeader(store);
    await userEvent.click(screen.getByText("خروج"));

    const state = store.getState().session;
    expect(state.isLoggedIn).toBe(false);
    expect(state.jwtToken).toBeNull();
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  test("navigates to login page on login button click", async () => {
    store = createTestStore({
      session: { isLoggedIn: false, jwtToken: null, refreshToken: null },
    });

    renderHeader(store);
    await userEvent.click(screen.getByText("ورود"));

    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });

  test("contains all main elements", () => {
    store = createTestStore({
      session: { isLoggedIn: false, jwtToken: null, refreshToken: null },
    });

    renderHeader(store);

    expect(screen.getByTestId("logo-mock")).toBeInTheDocument();
    expect(screen.getByText("کاوش")).toBeInTheDocument();
    expect(screen.getByText("شروع پروژه")).toBeInTheDocument();
  });
});
