import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';
import {WritableDraft} from 'immer/dist/types/types-external';
// import {Dispatch} from 'react';
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
    incrementByAmount: incrementCountbyAmount,
  },
});

export const incrementAsync = (amount: number) => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
