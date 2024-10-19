import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./models/slices/UserSlice";
import sidebarReducer from "./models/slices/SidebarSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
