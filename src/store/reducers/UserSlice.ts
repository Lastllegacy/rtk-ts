import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface UserState {
   users: IUser[];
   isLoading: boolean;
   error: string,
}

const initialState : UserState = {
   users: [],
   isLoading: false,
   error: ""
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      // в PayloadAction мы указываем тот тип, который ожидаем в payload
      // increment(state, action: PayloadAction<number>)
      usersFetching(state ) { 
         state.isLoading = true;
      },
      usersFetchingSuccess(state,action: PayloadAction<IUser[]>  ) { 
         state.users = action.payload;
         state.error = '';
         state.isLoading = false;
      },
      usersFetchingError(state, action: PayloadAction<string> ) { 
         state.isLoading = false;
         state.error = action.payload;
      },
   }
})

export default userSlice.reducer;