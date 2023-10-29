import axios, { AxiosError } from "axios";

export const setupAPIClient = () => {
  const api = axios.create({
    baseURL: "http://localhost:3000/api/v1",
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  return api;
};
