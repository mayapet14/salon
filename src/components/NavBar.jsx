//component 1
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function NavBar() {
  return (
    <nav className="navbar">
      {/* I tried to use tailwind here. didn't work, followed installation. even in the space example I couldn't get the router and tailwind to work concurrently */}
      <NavLink to="/">
        <img
          class="logo"
          src={logo}
          alt="https://www.freepik.com/free-photo/view-vintage-scissors_40463470.htm#fromView=search&page=1&position=3&uuid=0ba8983f-129d-4312-b1c1-64299a7eda02"
        />
      </NavLink>
      <div className="navtext">
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/location" activeClassName="active">
          Location
        </NavLink>
        <NavLink to="/services" activeClassName="active">
          Services
        </NavLink>
        <NavLink to="/booking" activeClassName="active">
          Booking
        </NavLink>
      </div>
    </nav>
  );
}

//used navlink similar to space example
