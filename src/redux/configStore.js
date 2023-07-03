import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    hoTen: (state = "HuynhQuangBao", action) => {
      return state;
    },
  },
});
