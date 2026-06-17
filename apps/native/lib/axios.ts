import axios from "axios";
import { Platform } from "react-native";
// import { getToken } from './auth';

const localhostPattern = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?/;

function getBaseURL() {
  const configuredUrl = process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:4000";
  const baseUrl = configuredUrl.replace(/\/api\/?$/, "");

  if (Platform.OS === "android") {
    return baseUrl.replace(localhostPattern, "http://10.0.2.2$2");
  }

  return baseUrl;
}

export const api = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use(async (config) => {
//   const token = await getToken();
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });
