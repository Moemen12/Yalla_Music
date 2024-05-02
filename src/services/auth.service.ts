import { createApi } from "@reduxjs/toolkit/query/react";
import { PATCH, POST } from "../config/http_methods";
import urlConfig from "../config/urlConfig.json";
import { baseQuery } from "./query/baseQuery";
import {
  ChangePassword,
  EmailCode,
  LoginInputs,
  SignupInputs,
} from "../types/interfaces/interface";
import { AuthResponse, ResetPassword } from "../types/responses/response";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    register: builder.mutation<AuthResponse, SignupInputs>({
      query: (signupBody) => ({
        url: urlConfig.signup,
        method: POST,
        body: signupBody,
      }),
    }),
    login: builder.mutation<AuthResponse, LoginInputs>({
      query: (loginBody) => ({
        url: urlConfig.login,
        method: POST,
        body: loginBody,
      }),
    }),
    verifyEmail: builder.mutation<any, EmailCode>({
      query: (code) => ({
        url: urlConfig.verify_email,
        method: POST,
        body: code,
      }),
    }),
    resendCode: builder.mutation<any, null>({
      query: () => ({
        url: urlConfig.resend_code,
        method: POST,
      }),
    }),
    resetPassword: builder.mutation<ResetPassword, EmailCode>({
      query: (code) => ({
        url: urlConfig.reset_pass,
        method: POST,
        body: code,
      }),
    }),
    changePassword: builder.mutation<ResetPassword, ChangePassword>({
      query: (changePassword) => ({
        url: urlConfig.change_pass,
        method: PATCH,
        body: changePassword,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useVerifyEmailMutation,
  useLoginMutation,
  useResendCodeMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
} = authApi;
