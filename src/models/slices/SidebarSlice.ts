import { createSlice } from "@reduxjs/toolkit";
import SidebarState from "../states/SidebarState";
import SidebarReducer from "../reducers/SidebarReducer";

export const SidebarSlice = createSlice({
  name: "Sidebar",
  initialState: SidebarState,
  reducers: SidebarReducer,
});

export const { updateSidebarStateByKey } = SidebarSlice.actions;
export default SidebarSlice.reducer;
