import axios from "axios";
import { store } from "../store/store";

const apiClient = axios.create({
  baseURL: "https://back.ideyar-app.ir/",
});

axios.defaults.withCredentials = true;

apiClient.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const jwt = state.session.jwtToken;
    if (jwt) {
      config.headers.Authorization = `Bearer ${jwt}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Prevent multiple redirects
let isRedirecting = false;

// Response Interceptor for Unauthorized Handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401 && !isRedirecting) {
      isRedirecting = true;

      // Redirect to the root path after a short delay to allow the snackbar to display
      setTimeout(() => {
        window.location.href = "/?logout=true";
      }, 1);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
