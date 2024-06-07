import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./query/baseQuery"; // Assuming this is properly defined
import urlConfig from "../config/urlConfig.json";
import { NotificationResponse, UserInfo } from "../types/responses/response";
import { PATCH, POST } from "../config/http_methods";
import { SettingsInputs } from "../types/interfaces/interface";

export const getUserInfoService = createApi({
  reducerPath: "getUserInfoService",
  baseQuery: baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUserInfo: builder.query<UserInfo, object>({
      query: () => urlConfig.user_info,
      transformResponse: (response: any) => response,
      providesTags: ["User"],
    }),
    updateUserProfile: builder.mutation<any, any>({
      query: (imageFile) => {
        let bodyFormData = new FormData();
        bodyFormData.append("image_profile", imageFile);
        return {
          url: urlConfig.update_user_profile,
          method: PATCH,
          body: bodyFormData,
          formData: true,
        };
      },
    }),
    updateUserInfo: builder.mutation<boolean, SettingsInputs>({
      query: (userInfo) => ({
        url: urlConfig.update_user_info,
        method: PATCH,
        body: userInfo,
      }),
    }),
    getUserNotification: builder.query<NotificationResponse, object>({
      query: () => urlConfig.get_notifications,
      transformResponse: (response: any) => response,
    }),
    markAsRead: builder.mutation<void, void>({
      query: () => ({
        url: urlConfig.mark_as_read,
        method: POST,
      }),
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useUpdateUserProfileMutation,
  useUpdateUserInfoMutation,
  useGetUserNotificationQuery,
  useMarkAsReadMutation,
} = getUserInfoService;
