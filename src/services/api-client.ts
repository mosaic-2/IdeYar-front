import axios from "axios";

axios.defaults.withCredentials = true;

export default axios.create({
  baseURL: "https://back.ideyar-app.ir/",
  headers: {
    Authorization: `Bearer YOUR_TOKEN_HERE`,
  },
});
