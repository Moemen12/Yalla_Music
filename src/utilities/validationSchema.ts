import * as yup from "yup";

export const SignupSchema = yup.object({
  username: yup
    .string()
    .required("Enter your username")
    .min(5)
    .max(15)
    .matches(/^[A-Za-z]+$/, "Username must only contain alphabetic characters"),
  email: yup.string().required("Enter your email").email(),
  password: yup
    .string()
    .required("Enter your password")
    .min(8)
    .matches(
      /^[A-Za-z0-9?#!@]+$/,
      "Password must contain only alphabetic characters (both lowercase and uppercase), numbers, '?', and '#'."
    ),
  passwordConfirmation: yup
    .string()
    .required("Enter password Confirmation")
    .min(8)
    .matches(
      /^[A-Za-z0-9?#!@]+$/,
      "Password must contain only alphabetic characters (both lowercase and uppercase), numbers, '?', and '#'."
    ),
});

export const LoginSchema = yup.object({
  email: yup.string().required("Enter your email").email(),
  password: yup
    .string()
    .required("Enter your password")
    .min(8)
    .matches(
      /^[A-Za-z0-9?#!@]+$/,
      "Password must contain only alphabetic characters (both lowercase and uppercase), numbers, '?', and '#'."
    ),
});

export const resetSchema = yup.object({
  email: yup.string().required("Enter your email").email(),
});

export const changePasswordSchema = yup.object({
  password: yup
    .string()
    .required("Enter your password")
    .min(8)
    .matches(
      /^[A-Za-z0-9?#!@]+$/,
      "Password must contain only alphabetic characters (both lowercase and uppercase), numbers, '?', and '#'."
    ),
  passwordConfirmation: yup
    .string()
    .required("Enter password Confirmation")
    .min(8)
    .matches(
      /^[A-Za-z0-9?#!@]+$/,
      "Password must contain only alphabetic characters (both lowercase and uppercase), numbers, '?', and '#'."
    ),
});
