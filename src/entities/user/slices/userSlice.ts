import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

// Define a type for the slice state
interface UserState {
    name: string;
    nickname: string;
}

// Define the initial state using that type
const initialState: UserState= {
    name: '',
    nickname: 'default Nick'
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    
  },
});

// export const { increment, decrement, incrementByAmount } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserNickname = (state: RootState) => state.user.nickname;

export default userSlice.reducer;
