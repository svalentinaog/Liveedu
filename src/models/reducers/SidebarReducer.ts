import type { PayloadAction } from "@reduxjs/toolkit";
import { ISidebarState, SidebarStateUpdate } from "../states/SidebarState";

const SidebarReducer = {
  updateSidebarStateByKey: (
    state: ISidebarState,
    action: PayloadAction<SidebarStateUpdate>
  ) => {
    state[action.payload.key] = action.payload.value;
  },
};

export default SidebarReducer;
