import React, { Component } from "react";

export default class Form extends Component {
  getValues = (event) => {
    let { value, id } = event.target;

    // todo: check input empty and match regex
    // ! update user
    let newValue = this.props.user;
    newValue[id] = value;

    // ! update errors
    let newErrors = this.props.errors;
    let type = event.target.getAttribute("data-type");
    if (newValue[id] === "") {
      newErrors[id] = "This field must not be empty";
    } else {
      newErrors[id] = "";
      if (type !== "number") {
        const letterRegex = /^[a-zA-Z\s]+$/;
        if (!letterRegex.test(newValue[id])) {
          newErrors[id] = "Name must only contain letters";
        }
      } else {
        newValue[id] = value * 1;
        const numberRegex = /^\d+$/;
        if (!numberRegex.test(newValue[id])) {
          newErrors[id] = "Number of Seats must only contain numbers";
        }
        if (newValue[id] === 0) {
          newErrors[id] = "You can't have zero seats!";
        }
      }
    }

    // ! active button
    let disabledBtn = false;
    for (let item in this.props.errors) {
      if (this.props.user[item] && this.props.errors[item] === "") {
        disabledBtn = true;
      } else {
        disabledBtn = false;
        this.props.updateState("user", newValue);
        this.props.updateState("errors", newErrors);
        this.props.updateState("isDisabled", !disabledBtn);
        return;
      }
    }

    // ! update State
    this.props.updateState("user", newValue);
    this.props.updateState("errors", newErrors);
    this.props.updateState("isDisabled", !disabledBtn);
  };

  render() {
    return (
      <>
        <p className="form__title fs-4">
          Fill the Required Details Below And Select Your Seats
        </p>
        <div className="form__inputs my-5">
          <div className="row">
            <div className="col-md-4">
              <div className="form__name d-flex align-items-center justify-content-start">
                <label htmlFor="customerName" className="form-label mb-0 me-3">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control w-75"
                  name="customerName"
                  id="customerName"
                  placeholder="Your fullname..."
                  title="Please fill out this field"
                  onChange={this.getValues}
                  value={this.props.user.customerName}
                />
              </div>
              <p className="text-danger fst-italic mt-3 text-center">
                {this.props.errors.customerName}
              </p>
            </div>
            <div className="col-md-8">
              <div className="form__seats d-flex align-items-center justify-content-start">
                <label htmlFor="numberOfSeats" className="form-label mb-0 me-3">
                  Number of Seats <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control w-75"
                  name="numberOfSeats"
                  id="numberOfSeats"
                  placeholder="How many seats do you want to reserved?"
                  title="Please fill out this field"
                  onChange={this.getValues}
                  data-type="number"
                />
              </div>
              <p className="text-danger fst-italic mt-3 text-center">
                {this.props.errors.numberOfSeats}
              </p>
            </div>
          </div>
        </div>
        <div className="form__submit text-center">
          <button
            className={`${
              this.props.btnDisabled ? "text-secondary bg-white" : ""
            } p-2 px-3 rounded-3 mb-5`}
            disabled={this.props.btnDisabled}
            onClick={() => {
              this.props.updateState("hienThi", true);
            }}
          >
            Start Selecting
          </button>
        </div>
      </>
    );
  }
}
