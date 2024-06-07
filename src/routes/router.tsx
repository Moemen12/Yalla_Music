import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Authlayout from "../layouts/AuthLayout";
import Signup from "../pages/auth/Signup";
import EmailVerification from "../pages/auth/EmailVerification";
import ForgetPassword from "../pages/auth/ForgetPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/dashboard/Profile";
import TwoFa from "../pages/dashboard/settings/TwoFa";

import _404 from "../components/general/_404";
import TwoFaPage from "../pages/auth/TwoFa";
import Index from "../modules/dashboard/settings";
import Artists from "../pages/dashboard/Artists";
import Releases from "../pages/dashboard/Releases";
import Events from "../pages/dashboard/Events";
import Artist from "../pages/common/Artist";
import AddSong from "../pages/dashboard/creator-mode/AddSong";
import NewAlbum from "../pages/dashboard/creator-mode/NewAlbum";

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
        path: "artist/:artistUsername/:artisanId",
        Component: Artist,
      },
    ],
  },

  {
    path: "dashboard",
    Component: DashboardLayout,

    children: [
      {
        Component: Dashboard,
        index: true,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "artists",
        Component: Artists,
      },

      {
        path: "releases",
        Component: Releases,
      },
      {
        path: "events",
        Component: Events,
      },
      {
        path: "creator-mode",
        children: [
          {
            index: true,
            Component: AddSong,
          },
          {
            path: "new-album",
            Component: NewAlbum,
          },
        ],
      },
      {
        path: "settings",
        children: [
          {
            index: true,
            Component: Index,
          },
          {
            path: "two-fa",
            Component: TwoFa,
          },
        ],
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
        path: "/auth/two-fa",
        Component: TwoFaPage,
      },
      {
        path: "/auth/reset-password/token/:resetToken",
        Component: ResetPassword,
      },
    ],
  },
  {
    path: "*",
    Component: _404,
  },
]);
