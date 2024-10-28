import { PayloadAction } from "@reduxjs/toolkit";
import { ICoursesState, CoursesStateUpdate } from "../states/CoursesState";

const CoursesReducer = {
  updateCoursesStateByKey: (
    state: ICoursesState,
    action: PayloadAction<CoursesStateUpdate>
  ) => {
    state[action.payload.key] = action.payload.value;
  },
};

export default CoursesReducer;
