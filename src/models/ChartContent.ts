export interface IChartDataState {
  timeSpentData: Array<number>;
  passedTestsData: Array<number>;
}

const ChartDataState: IChartDataState = {
  timeSpentData: [],
  passedTestsData: [],
};

export default ChartDataState;
