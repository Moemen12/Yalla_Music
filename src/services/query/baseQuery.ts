import { BaseQueryApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";

// import { RootState } from "../../app/store";

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

  // const state = api.getState() as RootState;
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
    toast.error("You are offline. Please check your internet connection.");
    throw new Error("Offline");
  }

  const response = await fetchBaseQuery({
    baseUrl: apiUrl,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  })(args, api, extraOptions);

  if (response && response.error) {
    if (response.error?.status === 401) {
      localStorage.removeItem("token");
      window.location.replace("/auth/login");
      return response.error;
      // console.log(response.error);
    } else {
      return response;
    }
  }

  return response;
};
// try {
//   console.log(response);

//   return response;
// } catch (error: any) {
//   return error.data;
// }

// if (response.error) {
//   const { status } = response.error;
//   const errorMessage =
//     (response.error.data as ErrorResponse)?.message ??
//     "An error occurred. Please try again later.";

//   if (status === 401) {
//     localStorage.removeItem("token");
//     window.location.replace("/auth/login");
//     return { error: { status, data: "Unauthorized" } };
//   }
// } else {
//   return response;
// }
