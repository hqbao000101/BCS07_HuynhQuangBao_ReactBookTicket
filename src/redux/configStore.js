import { configureStore } from "@reduxjs/toolkit";
import { ticketReducer } from "./reducer/ticketReducer";
import { seatReducer } from "./reducer/seatReducer";

export const store = configureStore({
  reducer: {
    hoTen: (state = "HuynhQuangBao", action) => {
      return state;
    },
    ticket: ticketReducer,
    seat: seatReducer,
  },
});
