import {
  BaseQueryApi,
  BaseQueryFn,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../../app/store";

//   import { toast } from "react-toastify";

interface ErrorResponse {
  message?: string;
}

const apiUrl = process.env.REACT_APP_API_BASE_URL;

export const baseQuery = async (
  args: any,
  api: BaseQueryApi,
  extraOptions: any
): Promise<any> => {
  const token = localStorage.getItem("token");

  const state = api.getState() as RootState;
  // const tokenExpiration = state?.auth?.user?.exp;
  // if (token && tokenExpiration) {
  //   const expirationDate = new Date(tokenExpiration * 1000);
  //   const currentDate = new Date();
  //   if (expirationDate < currentDate) {
  //     api.dispatch(logout()); // Dispatch logout action if token is expired
  //     throw new Error("Token expired");
  //   }
  // }
  if (!navigator.onLine) {
    // Check if the user is offline
    // toast.error("You are offline. Please check your internet connection.");
    throw new Error("Offline");
  }

  const response = await fetchBaseQuery({
    baseUrl: apiUrl,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  })(args, api, extraOptions);

  if (response.error) {
    const { status } = response.error;
    // Optional chaining with nullish coalescing
    const errorMessage =
      (response.error.data as ErrorResponse)?.message ??
      "An error occurred. Please try again later.";

    if (status === 401) {
      localStorage.removeItem("token");
      window.location.replace("/auth/login");
      return { error: { status, data: "Unauthorized" } };
    } else {
      return { error: { status, data: errorMessage } };
    }
  } else {
    return response;
  }
};
