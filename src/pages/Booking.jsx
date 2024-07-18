//component 9

import Form from "../components/Form";
import BookingInfo from "../components/BookingInfo";
import React, { useState } from "react";
import { dates } from "../data.json";
import PageTitle from "../components/PageTitle";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Booking() {
  const [bookings] = useState(dates);
  const [value, setValue] = useState(0);

  const { day, time } = bookings[value];

  return (
    <>
      <NavBar />
      <main>
        <PageTitle title="Maya's Salon | Booking" />
        <div class="bookinghead">
          <BookingInfo />
          <Form />

          {/* state 2 */}
          <div class="date-buttons">
            <button
              className={`${value === 0 ? "active" : ""}`}
              onClick={() => setValue(0)}
            >
              Friday 6/20
            </button>
            <button
              className={`${value === 1 ? "active" : ""}`}
              onClick={() => setValue(1)}
            >
              Saturday 6/22
            </button>
            <button
              className={`${value === 2 ? "active" : ""}`}
              onClick={() => setValue(2)}
            >
              Sunday 6/23
            </button>
          </div>
          <div>
            <h3>{day}</h3>
            <h2>{time}</h2>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
//concept imagined from space example
