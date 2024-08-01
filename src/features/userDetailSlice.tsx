import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    // console.log("data", data);
    const response = await fetch(
      "https://66aa28da613eced4eba7d266.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  users: [],
  loading: false,
  error: false,
};

export const userDetailSlice = createSlice({
  name: "CRUD API",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.payload;
      });
  },
});

export const {} = userDetailSlice.actions;

export default userDetailSlice.reducer;
