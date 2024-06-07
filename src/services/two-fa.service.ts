import { createApi } from "@reduxjs/toolkit/query/react";
import { PATCH, POST } from "../config/http_methods";
import urlConfig from "../config/urlConfig.json";
import { baseQuery } from "./query/baseQuery";
import { OtpCode } from "../types/interfaces/interface";
import { GeneralResponse } from "../types/responses/response";

export const twoFaApi = createApi({
  reducerPath: "twoFaApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    enable2fa: builder.mutation<string, any>({
      query: () => ({
        url: urlConfig["enable-2fa"],
        method: POST,
      }),
    }),
    disable2fa: builder.mutation<GeneralResponse, any>({
      query: () => ({
        url: urlConfig["disable-2fa"],
        method: PATCH,
      }),
    }),

    verify2Fa: builder.mutation<any, OtpCode>({
      query: (verify2Fa) => ({
        url: urlConfig["verify-2fa"],
        method: POST,
        body: verify2Fa,
      }),
    }),
  }),
});

export const {
  useEnable2faMutation,
  useDisable2faMutation,
  useVerify2FaMutation,
} = twoFaApi;
