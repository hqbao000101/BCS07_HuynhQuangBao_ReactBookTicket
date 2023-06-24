import React, { Component } from "react";
import SeatList from "../danhSachGhe.json";

export default class SeatGrid extends Component {
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
        <div className="mt-4 mb-2">
          <span className="text-center bg-warning text-black fs-5 d-block mx-auto w-50 py-2 visually-hidden">
            Please Select Your Seats !
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
                      <div className="grid__item grid__item__box" key={index}>
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
          <button className="py-4">SCREEN THIS WAY</button>
        </div>
      </>
    );
  }
}
