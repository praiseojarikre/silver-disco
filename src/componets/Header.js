import React, { useState } from "react";
import favicon from "../assets/illustration-hero.svg";
import Musicicon from "../assets/icon-music.svg";
// import {Year} from "./db"

const Header = () => {
  const [Year, setYear] = useState({
    name: "Annual plan",
    price: "$59.99 per year",
  });

  function getPrice() {
    if (Year.name === "Annual plan") {
      setYear({
        name: "Monthly plan",
        price: "$5.00 per Month",
      });
    } else {
      setYear({
        name: "Annual plan",
        price: "$59.99 per year",
      });
    }
  }
  function Delete() {
    setYear([]);
  }
  return (
    <div className="App">
      <div className="solely">
        <div className="summary">
          <div>
            <img src={favicon} className="person" />
            <h1>Order Summary</h1>
            <p>
              You can now listen to millions of songs,
              <br /> audio books and podcasts on any device <br /> anywhere you
              like
            </p>
            <div className="plan">
              <img src={Musicicon} alt="" className="music" />
              <h4>
                {Year.name} <br />
                <span> {Year.price}</span>
              </h4>
              <p onClick={getPrice} className="a">
                Change
              </p>
            </div>
            <div className="butn">
              <button className="btn">Proceed to payment</button>
            </div>
            <div className="bcn">
              <button className="bnn" onClick={Delete}>
                Cancel order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
