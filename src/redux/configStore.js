import { configureStore } from "@reduxjs/toolkit";
import { ticketReducer } from "./reducer/ticketReducer";
import { seatReducer } from "./reducer/seatReducer";

export const store = configureStore({
  reducer: {
    project: (state = "ex4-react-book-ticket", action) => {
      return state;
    },
    ticket: ticketReducer,
    seat: seatReducer,
  },
});
