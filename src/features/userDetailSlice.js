import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const userDetailSlice = createSlice({
  name: "CRUD",
  initialState,
  reducers: {},
});

export const {} = userDetailSlice.actions;

export default userDetailSlice.reducer;
