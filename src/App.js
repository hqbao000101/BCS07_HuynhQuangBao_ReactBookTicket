import React, { Component } from "react";
import "./App.css";
import Form from "./Components/Form";
import SeatGrid from "./Components/SeatGrid";

export default class App extends Component {
  state = {
    hang: "A",
    danhSachGhe: [
      { soGhe: "A1", gia: 75000, daDat: false },
      { soGhe: "A2", gia: 75000, daDat: false },
      { soGhe: "A3", gia: 75000, daDat: false },
      { soGhe: "A4", gia: 75000, daDat: false },
      { soGhe: "A5", gia: 75000, daDat: false },
      { soGhe: "A6", gia: 75000, daDat: false },
      { soGhe: "A7", gia: 75000, daDat: false },
      { soGhe: "A8", gia: 75000, daDat: false },
      { soGhe: "A9", gia: 75000, daDat: false },
      { soGhe: "A10", gia: 75000, daDat: false },
      { soGhe: "A11", gia: 0, daDat: true },
      { soGhe: "A12", gia: 0, daDat: true },
    ],
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
    choDaChon: "A4, B3, C1, D1",
  };

  updateState = (name, value) => {
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1 id="title" className="text-center py-5">
            MOVIE SEAT SELECTION
          </h1>
          <div className="content bg-white bg-opacity-10 p-5 w-75 mx-auto">
            <Form
              user={this.state.user}
              errors={this.state.errors}
              updateState={this.updateState}
              btnDisabled={this.state.isDisabled}
              hienThi={this.state.hienThi}
            />
            <SeatGrid
              phaseState={this.state.hienThi}
              hienThi={this.state.hienThi}
              user={this.state.user}
            />
            <div className="text-center">
              <button
                className="text-secondary bg-white p-2 px-3 rounded-3 my-5"
                disabled={this.state.isDisabled}
              >
                Confirm Selection
              </button>
            </div>
            <table className="table bg-white text-black w-75 mx-auto">
              <thead>
                <tr className="text-center fw-bold">
                  <td>Name</td>
                  <td>Numer of Seats</td>
                  <td>Seats</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td>Bao Huynh Quang</td>
                  <td>4</td>
                  <td>{this.state.choDaChon}</td>
                  <td>250.000 VND</td>
                </tr>
              </tbody>
            </table>
            <p className="text-warning text-center mt-5 fs-3 visually-hidden">
              <i className="fa-solid fa-heart text-danger me-2"></i>Thanks for
              Booking. Have a good time watching movies{" "}
              <i className="fa-solid fa-heart text-danger ms-2"></i>
            </p>
          </div>

          <p id="footer" className="text-center mt-5">
            &copy; 2018 Movie Seat Selection. All rights Reserved | Design by
            W3layouts
          </p>
        </div>
      </>
    );
  }
}
