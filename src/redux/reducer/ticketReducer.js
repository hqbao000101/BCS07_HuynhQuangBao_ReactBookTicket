const initialState = {
  user: {
    customerName: "",
    numberOfSeats: 0,
  },
  errors: {
    customerName: "",
    numberOfSeats: "",
  },
  isDisabled: true,
  hienThi: false,
  choDaChon: [],
  thanks: false,
};

export const ticketReducer = (state = initialState, action) => {
  return state;
}
