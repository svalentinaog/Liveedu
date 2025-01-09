import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { IChartState } from "../models/states/ChartState";
import { setChartData } from "../models/slices/ChartSlice";

export default function useChartData() {
  const dispatch = useDispatch();
  const chartData = useSelector((state: RootState) => state.chart);

  const updateChartData = (
    type: "timeSpentData" | "passedTestsData",
    data: IChartState[]
  ) => {
    dispatch(setChartData({ type, data }));
  };

  return {
    chartData,
    updateChartData,
  };
}
