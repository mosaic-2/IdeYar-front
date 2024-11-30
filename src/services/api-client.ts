import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { store } from "../store/store";

const apiClient = axios.create({
  baseURL: "https://back.ideyar-app.ir/",
});

axios.defaults.withCredentials = true;

apiClient.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const jwt = state.session.jwtToken;
    console.log("jwt: ", jwt);
    if (jwt) {
      config.headers.Authorization = `Bearer ${jwt}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
