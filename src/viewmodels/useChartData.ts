import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setChartData } from "../models/slices/ChartSlice";
import { IChartState } from "../models/states/ChartState";

export default function useChartData() {
  const dispatch = useDispatch();
  const chartData = useSelector((state: RootState) => state.charts);

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
