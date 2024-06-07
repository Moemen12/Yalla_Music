import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/auth.service";
import { twoFaApi } from "../services/two-fa.service";
import { getUserInfoService } from "../services/user.service";
import { authReducer, userReducer } from "../features";
import { creatorModeApi } from "../services/creator-mode";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [creatorModeApi.reducerPath]: creatorModeApi.reducer,
    [twoFaApi.reducerPath]: twoFaApi.reducer,
    [getUserInfoService.reducerPath]: getUserInfoService.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      creatorModeApi.middleware,
      twoFaApi.middleware,
      getUserInfoService.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
