import axios from "axios";

axios.defaults.withCredentials = true;

export default axios.create({
  baseURL: "https://back.ideyar-app.ir/",
});
