import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL || "https://example.com";

export const http = axios.create({
  baseURL: `${BASE_URL}api`,
});
