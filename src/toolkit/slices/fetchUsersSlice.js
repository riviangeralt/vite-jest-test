import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../utils/utils";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchUsersFromJSONPlaceholder = createAsyncThunk(
  "users/fetchUsers",
  async (body, { rejectWithValue }) => {
    try {
      const res = await fetchUsers();
      return res;
    } catch (err) {
      return rejectWithValue("Error while fetching users");
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersFromJSONPlaceholder.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsersFromJSONPlaceholder.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsersFromJSONPlaceholder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const usersSliceSelector = (state) => state.users;
export const usersSliceReducer = usersSlice.reducer;
