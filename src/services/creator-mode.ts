import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./query/baseQuery";
import { PATCH } from "../config/http_methods";
import urlConfig from "../config/urlConfig.json";
import { CreatorModeInfo, GeneralResponse } from "../types/responses/response";

export const creatorModeApi = createApi({
  reducerPath: "creatorModeApi",
  baseQuery: baseQuery,
  tagTypes: ["CreatorMode"],
  endpoints: (builder) => ({
    getCreatorMode: builder.query<CreatorModeInfo, void>({
      query: () => urlConfig["get-mode-info"],
      transformResponse: (response: any) => response,
      providesTags: ["CreatorMode"],
    }),
    enableCreatorMode: builder.mutation<GeneralResponse, void>({
      query: () => ({
        url: urlConfig["enable-creator-mode"],
        method: PATCH,
      }),
      invalidatesTags: ["CreatorMode"],
    }),

    disableCreatorMode: builder.mutation<GeneralResponse, void>({
      query: () => ({
        url: urlConfig["disable-creator-mode"],
        method: PATCH,
      }),
      invalidatesTags: ["CreatorMode"],
    }),
    getMusicGenres: builder.query<string[], void>({
      query: () => urlConfig.musics_genres,
      providesTags: ["CreatorMode"],
    }),
  }),
});

export const {
  useEnableCreatorModeMutation,
  useGetCreatorModeQuery,
  useDisableCreatorModeMutation,
  useGetMusicGenresQuery,
} = creatorModeApi;
