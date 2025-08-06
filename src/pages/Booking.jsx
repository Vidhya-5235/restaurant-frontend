import { useState } from "react";
import axios from "axios";

function Booking() {
  const [data, setData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/book-table", data);
    alert(res.data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Table</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input type="date" name="date" onChange={handleChange} required />
      <input type="time" name="time" onChange={handleChange} required />
      <input name="guests" placeholder="No. of Guests" onChange={handleChange} required />
      <button type="submit">Book Table</button>
    </form>
  );
}

export default Booking;
