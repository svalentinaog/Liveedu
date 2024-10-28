import { createSlice } from "@reduxjs/toolkit";
import CoursesState from "../states/CoursesState";
import CoursesReducer from "../reducers/CoursesReducer";

export const CoursesSlice = createSlice({
  name: "Courses",
  initialState: CoursesState,
  reducers: CoursesReducer,
});

export const { updateCoursesStateByKey } = CoursesSlice.actions;
export default CoursesSlice.reducer;
