import type { PayloadAction } from "@reduxjs/toolkit";
import { ICounterState } from "../states/CounterState";

const CounterReducer = {
  increment: (state: ICounterState) => {
    state.value += 1;
  },
  decrement: (state: ICounterState) => {
    state.value -= 1;
  },
  incrementByAmount: (state: ICounterState, action: PayloadAction<number>) => {
    state.value += action.payload;
  },
};

export default CounterReducer;
