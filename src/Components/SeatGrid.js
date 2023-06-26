import React, { Component } from "react";
import SeatList from "../danhSachGhe.json";

export default class SeatGrid extends Component {
  state = { quantity: 0 };

  chooseSeat = (event) => {
    console.log(event.target);
    let className = event.target.className;
    let numberOfSeat = this.state.quantity;
    if (
      !className.includes("grid__item__box--red") &&
      !className.includes("grid__item__box--green") &&
      numberOfSeat <= this.props.user.numberOfSeats - 1
    ) {
      event.target.className = "grid__item grid__item__box active grid__item__box--green ";
      numberOfSeat++;
    } else if (className.includes("grid__item__box--green")) {
      event.target.className = "grid__item grid__item__box active";
      numberOfSeat--;
    }
    this.setState({
      ...this.quantity,
      quantity: numberOfSeat,
    });
  };

  render() {
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
              this.props.phaseState ? "" : "visually-hidden"
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
      </>
    );
  }
}
