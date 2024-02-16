/**
 * api global config
 * By   @2024/1/4
 */

import axios from "axios";
import { useCallback } from "react";

export const templateURL = process.env.NEXT_PUBLIC_BASE_URL_TEMPLATE + "/api";

export function useRequest() {
  const getToken = useCallback(() => {
    return "";
  }, []);

  const createRequest = useCallback(
    (baseURL: string) => {
      const request = axios.create({
        baseURL,
        timeout: 10000,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: getToken() ? `Bearer ${getToken()}` : "",
        },
      });

      request.interceptors.response.use(
        function (response) {
          // Any status code that lie within the range of 2xx cause this function to trigger
          // Do something with response data
          return response;
        },
        function (error) {
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          // Do something with response error
          if (error.response?.status === 401) {
            console.error(401);
          }
          return Promise.reject(error);
        },
      );
      return request;
    },
    [getToken],
  );

  return {
    templateRequest: createRequest(templateURL),
  };
}
