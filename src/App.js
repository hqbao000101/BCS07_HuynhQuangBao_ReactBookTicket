import React, { Component, createRef } from "react";
import "./App.css";
import Form from "./Components/Form";
import SeatGrid from "./Components/SeatGrid";
import SeatList from "./danhSachGhe.json";

export default class App extends Component {
  constructor() {
    super();
    this.ref = createRef();
  }

  state = {
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

  updateState = (name, value) => {
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  formatPayment = (num) => {
    let numberArr = num.toString().split("");
    let indexArr = 1;
    for (let i = numberArr.length - 1; i >= 0; i--) {
      if (indexArr % 3 === 0 && indexArr !== numberArr.length) {
        numberArr[i] = `.${numberArr[i]}`;
      }
      indexArr++;
    }
    return numberArr.join("");
  };

  reload = () => {
    this.setState({
      ...this.state,
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
    });
    this.ref.current.setState({
      quantity: 0,
      selectedSeats: [],
    });
  };

  render() {
    const totalPayment =
      SeatList[1].danhSachGhe[0].gia * this.state.choDaChon.length;
    return (
      <>
        <div className="container">
          <h1 id="title" className="text-center py-5">
            MOVIE SEAT SELECTION
          </h1>
          <div className="content bg-white bg-opacity-10 p-5 w-75 mx-auto position-relative">
            <Form
              user={this.state.user}
              errors={this.state.errors}
              updateState={this.updateState}
              btnDisabled={this.state.isDisabled}
              hienThi={this.state.hienThi}
            />
            <SeatGrid
              hienThi={this.state.hienThi}
              user={this.state.user}
              btnDisabled={this.state.isDisabled}
              selectedSeats={this.state.choDaChon}
              updateState={this.updateState}
              thanks={this.state.thanks}
              ref={this.ref}
            />
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
                  <td>{this.state.user.customerName}</td>
                  <td>
                    {this.state.user.numberOfSeats
                      ? this.state.user.numberOfSeats
                      : ""}
                  </td>
                  <td>{this.state.choDaChon.join(", ")}</td>
                  <td>
                    {totalPayment
                      ? `${this.formatPayment(totalPayment)} VND`
                      : ""}
                  </td>
                </tr>
              </tbody>
            </table>
            <p
              className={`text-warning text-center mt-5 fs-3 ${
                !this.state.thanks ? "visually-hidden" : ""
              }`}
            >
              <i className="fa-solid fa-heart text-danger me-2"></i>Thanks for
              Booking. Have a good time watching movies{" "}
              <i className="fa-solid fa-heart text-danger ms-2"></i>
            </p>
            <button id="reload" onClick={this.reload} title="Reload Selection">
              <i className="fa-solid fa-rotate"></i>
            </button>
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
