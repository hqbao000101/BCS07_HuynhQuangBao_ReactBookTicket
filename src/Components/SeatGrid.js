import React, { Component } from "react";
import SeatList from "../danhSachGhe.json";

export default class SeatGrid extends Component {
  state = {
    quantity: 0,
    selectedSeats: [],
  };

  chooseSeat = (event) => {
    // console.log(event.target);
    let { id, className } = event.target;
    let numberOfSeat = this.state.quantity;
    let seatList = this.props.selectedSeats;
    if (
      !className.includes("grid__item__box--red") &&
      !className.includes("grid__item__box--green") &&
      numberOfSeat <= this.props.user.numberOfSeats - 1
    ) {
      event.target.className =
        "grid__item grid__item__box active grid__item__box--green ";
      numberOfSeat++;
      seatList.push(id);
    } else if (className.includes("grid__item__box--green")) {
      event.target.className = "grid__item grid__item__box active";
      numberOfSeat--;
      let seatIndex = seatList.findIndex((item) => item === id);
      seatList.splice(seatIndex, 1);
    }
    this.setState({
      ...this.quantity,
      quantity: numberOfSeat,
      selectedSeats: seatList,
    });
  };

  render() {
    // console.log(this.state.quantity !== this.props.user.numberOfSeats || this.props.btnDisabled);
    return (
      <>
        <div className="seat__types">
          <div className="types__item">
            <div></div>
            <p>Selected Seat</p>
          </div>
          <div className="types__item">
            <div></div>
            <p>Reserved Seat</p>
          </div>
          <div className="types__item">
            <div></div>
            <p>Empty Seat</p>
          </div>
        </div>
        <div className="mt-4 mb-2 vis">
          <span
            className={`text-center bg-warning text-black fs-5 d-block mx-auto w-50 py-2 ${
              this.props.hienThi ? "" : "visually-hidden"
            }`}
          >
            Please Select Your Seats!
          </span>
        </div>
        <div className="mb-5">
          {SeatList.map((item, index) => {
            let fake_row = index === 6 ? <div id="fake-row"></div> : "";
            return (
              <div key={index}>
                {fake_row}
                <div
                  className={`seat__grid ${
                    index !== 0 ? "seat__grid--not1" : ""
                  }`}
                >
                  <div className="grid__item">{item.hang}</div>
                  {item.danhSachGhe.map((item, index) => {
                    return (
                      <div
                        className={`grid__item grid__item__box ${
                          this.props.hienThi ? "active" : ""
                        } ${item.daDat ? "grid__item__box--red" : ""}`}
                        key={index}
                        onClick={this.chooseSeat}
                        id={item.soGhe}
                      >
                        {item.soGhe}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="seat__footer text-center px-4">
          <p className="py-4">SCREEN THIS WAY</p>
        </div>
        <div className="text-center">
          <button
            className={`${
              this.state.quantity !== this.props.user.numberOfSeats ||
              this.props.btnDisabled
                ? "text-secondary bg-white"
                : ""
            } p-2 px-3 rounded-3 my-5`}
            disabled={
              this.state.quantity !== this.props.user.numberOfSeats ||
              this.props.btnDisabled
            }
            onClick={() => {
              this.props.updateState("choDaChon", this.state.selectedSeats);
              this.props.updateState("thanks", true);
            }}
          >
            Confirm Selection
          </button>
        </div>
      </>
    );
  }
}
