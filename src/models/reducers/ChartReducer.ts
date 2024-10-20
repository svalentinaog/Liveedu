import type { PayloadAction } from "@reduxjs/toolkit";
import { ChartStateUpdate, IChartState } from "../states/ChartState";

const ChartReducer = {
  updateChartByKey: (
    state: IChartState,
    action: PayloadAction<ChartStateUpdate>
  ) => {
    const { key, value } = action.payload;

    if (key === "label" && typeof value === "string") {
      state[key] = value;
    } else if (key === "value" && typeof value === "number") {
      state[key] = value;
    }
  },

  chartData: (state: IChartState) => {
    state.label = "";
    state.value = 0;
  },
};

export default ChartReducer;
