import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPost } from "../../utils/utils";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const postCreateInJSONPlaceholder = createAsyncThunk(
  "users/fetchUsers",
  async (body, { rejectWithValue }) => {
    try {
      const res = await createPost(body);
      return res;
    } catch (err) {
      return rejectWithValue("Error while fetching users");
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(postCreateInJSONPlaceholder.pending, (state) => {
        state.loading = true;
      })
      .addCase(postCreateInJSONPlaceholder.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(postCreateInJSONPlaceholder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const postsSliceSelector = (state) => state.posts;
export const postsSliceReducer = postsSlice.reducer;
