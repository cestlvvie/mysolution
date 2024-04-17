import axios from "axios";
import { config } from "./config.ts";

const axiosApi = axios.create({
  baseURL: config.baseURL,
});

export default axiosApi;
