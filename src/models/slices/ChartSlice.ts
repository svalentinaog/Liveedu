import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ChartState, { IChartState } from "../states/ChartState";
import ChartReducer from "../reducers/ChartReducer";

const ChartSlice = createSlice({
  name: "Charts",
  initialState: ChartState,
  reducers: {
    ...ChartReducer,
    setChartData: (
      state,
      action: PayloadAction<{ type: string; data: IChartState[] }>
    ) => {
      if (action.payload.type === "timeSpentData") {
        state.label = action.payload.data[0]?.label || "";
        state.value = action.payload.data[0]?.value || 0;
      } else if (action.payload.type === "passedTestsData") {
        state.label = action.payload.data[0]?.label || "";
        state.value = action.payload.data[0]?.value || 0;
      }
    },
  },
});

export const { updateChartByKey, setChartData } = ChartSlice.actions;
export default ChartSlice.reducer;
