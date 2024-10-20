import { createSlice } from "@reduxjs/toolkit";
import ChartState from "../states/ChartState";
import ChartReducer from "../reducers/ChartReducer";

const ChartSlice = createSlice({
  name: "Charts",
  initialState: ChartState,
  reducers: ChartReducer,
});

export const { updateChartByKey } = ChartSlice.actions;
export default ChartSlice.reducer;
