import "./App.css";
import Form from "./Components/Form";
import SeatGrid from "./Components/SeatGrid";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="text-center py-5 text-warning ">MOVIE SEAT SELECTION</h1>
        <div className="content text-center bg-white bg-opacity-10 p-5 w-50 mx-auto">
          <Form />
          <SeatGrid />
          <h3 className="my-4 text-black bg-white rounded-3 d-inline-block fw-normal p-3 fs-5 py-2">Confirm Selection</h3>
          <table className="table bg-white text-black w-75 mx-auto" border={3}>
            <thead>
              <tr>
                <td>Name</td>
                <td>Numer of Seats</td>
                <td>Seats</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-center mt-5">
          &copy; 2018 Movie Seat Selection. All rights Reserved | Design by
          W3layouts
        </p>
      </div>
    </>
  );
}

export default App;
