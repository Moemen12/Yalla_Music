import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Authlayout from "../layouts/AuthLayout";
import Signup from "../pages/auth/Signup";
import EmailVerification from "../pages/auth/EmailVerification";
import ForgetPassword from "../pages/auth/ForgetPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import Live from "../pages/Live";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,

    children: [
      {
        Component: Home,
        index: true,
      },
      {
        path: "/yallamusic/live",
        Component: Live,
      },
    ],
  },
  {
    Component: Authlayout,

    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/signup",
        Component: Signup,
      },
      {
        path: "/auth/email/verification",
        Component: EmailVerification,
      },
      {
        path: "/auth/forget-password",
        Component: ForgetPassword,
      },
      {
        path: "/auth/reset-password/token/:resetToken",
        Component: ResetPassword,
      },
    ],
  },
]);
