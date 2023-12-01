import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { IUser } from '../../types/types'


interface UserState {
  user: IUser | null;
  isAuth: boolean;
  id: string | null;
}

const initialState: UserState = {
  user: null,
  isAuth: false,
  id: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuth = true;
      state.id = action.payload.id;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
      state.id = null;
    },
 
  },
})

export const {login, logout} = userSlice.actions

export const selectCount = (state: RootState) => state.user
export const selectUserId = (state: RootState) => state.user.id
export default userSlice.reducer
