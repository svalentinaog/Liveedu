export interface IChartState {
  [key: string]: string | number;
}

export type ChartStateKeys = keyof IChartState;

export type ChartStateUpdate =
  | { key: "label"; value: string }
  | { key: "value"; value: number };

const ChartState: IChartState = {
  label: "",
  value: 0,
};

export default ChartState;
