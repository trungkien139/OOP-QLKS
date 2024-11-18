import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./Navbar.css"; // Thêm CSS tùy chỉnh

function Navigation({ isSidebarOpen }) {
  return (
    <div className={`navbar-container ${isSidebarOpen ? "hidden" : "visible"}`}>
      <div className="navbar-brand">
        <Link to="/">Hotel Management</Link>
      </div>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/rooms">
          Rooms
        </Nav.Link>
        <Nav.Link as={Link} to="/bookings">
          Bookings
        </Nav.Link>
        <Nav.Link as={Link} to="/customers">
          Customers
        </Nav.Link>
        <Nav.Link as={Link} to="/payments">
          Payments
        </Nav.Link>
        <Nav.Link as={Link} to="/payments">
          Employee
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Navigation;
