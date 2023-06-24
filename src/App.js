import "./App.css";
import Form from "./Components/Form";
import SeatGrid from "./Components/SeatGrid";

function App() {
  return (
    <>
      <div className="container">
        <h1 id="title" className="text-center py-5">
          MOVIE SEAT SELECTION
        </h1>
        <div className="content bg-white bg-opacity-10 p-5 w-75 mx-auto">
          <Form></Form>
          <SeatGrid></SeatGrid>
          <div className="text-center">
            <button className="p-2 px-3 rounded-3 my-5">
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
                <td>A4, B3, C1, D1</td>
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

export default App;
