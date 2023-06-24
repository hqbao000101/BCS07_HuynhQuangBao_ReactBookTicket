import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <>
        <p className="form__title fs-4">
          Fill the Required Details Below And Select Your Seats
        </p>
        <div className="form__inputs my-5">
          <div className="row">
            <div className="col-md-4 d-flex align-items-center justify-content-start">
              <label htmlFor="customer-name" className="form-label mb-0 me-3">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control w-75"
                name="customer-name"
                id="customer-name"
                placeholder="Your fullname..."
                title="Please fill out this field"
              />
            </div>
            <div className="col-md-8 d-flex align-items-center justify-content-start">
              <label htmlFor="number-of-seats" className="form-label mb-0 me-3">
                Number of Seats <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control w-75"
                name="number-of-seats"
                id="number-of-seats"
                placeholder="How many seats do you want to reserved?"
                title="Please fill out this field"
              />
            </div>
          </div>
        </div>
        <div className="form__submit text-center">
          <button className="p-2 px-3 rounded-3 mb-5">Start Selecting</button>
        </div>
      </>
    );
  }
}
