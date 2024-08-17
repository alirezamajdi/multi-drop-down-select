import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getPatients = createAsyncThunk(
//   "getPatients",
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get("https://dummyjson.com/users");
//       return data;
//     } catch (err) {
//       if (!err.response) {
//         throw err;
//       }
//       throw rejectWithValue(err.response.data);
//     }
//   }
// );

export interface IAuthState {
  authState: boolean;
}

const initialState: IAuthState = {
  authState: false,
};

export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {},
});

export const {} = patientSlice.actions;
export const patientReducer = patientSlice.reducer;
