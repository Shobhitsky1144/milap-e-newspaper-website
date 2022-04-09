import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "loadpdf",
  initialState: {
    loadpdf: null,
  },
  reducers: {
    LoadPdf: (state, action) => {
      state.loadpdf = action.payload;
    },
  },
});
export const { LoadPdf } = userSlice.actions;
export const selectPdf = (state) => state.loadpdf.loadpdf;
export default userSlice.reducer;
