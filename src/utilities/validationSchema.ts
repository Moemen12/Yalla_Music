import * as yup from "yup";

export const SignupSchema = yup.object({
  username: yup
    .string()
    .required("Enter your username")
    .min(5)
    .max(15)
    .matches(
      /^[A-Za-z ]+$/,
      "Username must only contain alphabetic characters"
    ),
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

export const SettingsSchema = yup.object({
  name: yup
    .string()
    .max(15)
    .matches(/^[A-Za-z ]*$/, {
      message: "Username must only contain alphabetic characters",
      excludeEmptyString: true,
    })
    .notRequired()
    .nullable(),
  lastName: yup
    .string()
    .max(15)
    .matches(/^[A-Za-z ]*$/, {
      message: "last Name must only contain alphabetic characters",
      excludeEmptyString: true,
    })
    .notRequired()
    .nullable(),

  country: yup.string(),

  instagram_url: yup
    .string()
    .nullable()
    .notRequired()
    .matches(/^(https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9._-]+\/?)$/, {
      message: "Enter a valid Instagram URL",
      excludeEmptyString: true,
    }),
  facebook_url: yup
    .string()
    .nullable()
    .notRequired()
    .matches(/^(https?:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9._-]+\/?)$/, {
      message: "Enter a valid Facebook URL",
      excludeEmptyString: true,
    }),

  snapchat_url: yup
    .string()
    .nullable()
    .notRequired()
    .matches(/^(https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9._-]+\/?)$/, {
      message: "Enter a valid Snapchat URL",
      excludeEmptyString: true,
    }),
  discord_url: yup
    .string()
    .nullable()
    .notRequired()
    .matches(/^(https?:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9._-]+\/?)$/, {
      message: "Enter a valid Discord URL",
      excludeEmptyString: true,
    }),

  bio: yup
    .string()
    .max(200)
    .nullable()
    .notRequired()
    .matches(/^[A-Za-z0-9, ]*$/, {
      message: "bio must contain only alphabetic characters",
      excludeEmptyString: true,
    }),
});
