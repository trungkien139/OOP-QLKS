import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navigation from "./components/Navbar";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Customers from "./pages/Customers";
import Payments from "./pages/Payments";
import Employee from "./pages/Employee";
import RoomManagement from "./pages/RoomManagement";
import SidebarFilter from "./components/SidebarFilter";
function App() {
  return (
    <div className="App">
      {/* Sử dụng Router để quản lý các đường dẫn */}
      <Router>
        {/* Thanh điều hướng */}
        {/* <Navigation /> */}
        <SidebarFilter />
        {/* Các route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<RoomManagement />} />
          <Route path="/bookings" element={<Booking />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
