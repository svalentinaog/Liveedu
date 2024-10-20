import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./models/slices/UserSlice";
import sidebarReducer from "./models/slices/SidebarSlice";
import chartReducer from "./models/slices/ChartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
    chart: chartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
