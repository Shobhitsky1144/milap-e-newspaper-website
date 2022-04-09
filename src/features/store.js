import { configureStore } from "@reduxjs/toolkit";
import pdfReducer from "./userSlice";

export default configureStore({
  reducer: {
    loadpdf: pdfReducer,
  },
});
