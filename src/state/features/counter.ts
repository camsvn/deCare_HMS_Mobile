import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {WritableDraft} from 'immer/dist/types/types-external';

export interface CounterState {
  count: number;
}

const incrementCount = (state: WritableDraft<CounterState>) => {
  state.count += 1;
};

const decrementCount = (state: WritableDraft<CounterState>) => {
  if (state.count > 0) {
    state.count -= 1;
  }
};

const incrementCountbyAmount = (
  state: WritableDraft<CounterState>,
  action: PayloadAction<number>,
) => {
  state.count += action.payload;
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: <CounterState>{
    count: 0,
  },
  reducers: {
    increment: incrementCount,
    decrement: decrementCount,
    incrementbyAmount: incrementCountbyAmount,
  },
});

export const {increment, decrement, incrementbyAmount} = counterSlice.actions;
export default counterSlice.reducer;
