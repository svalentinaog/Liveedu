import { createSlice } from "@reduxjs/toolkit";
import CounterState from "../states/CounterState";
import CounterReducer from "../reducers/CounterReducer";

export const CounterSlice = createSlice({
  name: "counter",
  initialState: CounterState,
  reducers: CounterReducer,
});

export const { increment, decrement, incrementByAmount } = CounterSlice.actions;
export default CounterSlice.reducer;
