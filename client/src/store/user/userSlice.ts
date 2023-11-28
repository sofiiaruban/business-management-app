import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { IUser } from '../../types/types';


interface UserState {
  user: IUser | null,
  isAuth: boolean,
}

const initialState: UserState = {
  user: null,
  isAuth: false
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
      state.isAuth = true
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;    
    },
  },
});

export const { login, logout} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
