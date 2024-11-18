import React, { useState } from "react";
import Navigation from "./Navbar"; // Đảm bảo import Navigation component
import "./SidebarFilter.css"; // Tệp CSS tùy chỉnh

const SidebarFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-wrapper">
      {/* Nút đóng/mở Sidebar */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? "✖" : "☰"} {/* Biểu tượng toggle */}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <h2 className="sidebar-title">Room Management</h2>

        {/* Sidebar Content */}
        <nav className="sidebar-content">
          <h4>Trạng thái</h4>
          {[
            "Phòng trống",
            "Phòng đã đặt",
            "Phòng đang thuê",
            "Tất cả phòng",
          ].map((status) => (
            <label key={status}>
              <input type="radio" name="status" value={status} />
              {status}
            </label>
          ))}

          <h4>Loại phòng</h4>
          {[
            "Phòng đơn",
            "Phòng đôi",
            "Phòng gia đình",
            "Tất cả loại phòng",
          ].map((type) => (
            <label key={type}>
              <input type="radio" name="roomType" value={type} />
              {type}
            </label>
          ))}

          <h4>Dọn dẹp</h4>
          {["Đã dọn dẹp", "Chưa dọn dẹp", "Sửa chữa", "Tất cả"].map(
            (cleaning) => (
              <label key={cleaning}>
                <input type="radio" name="cleaningStatus" value={cleaning} />
                {cleaning}
              </label>
            )
          )}
        </nav>
      </div>

      {/* Navbar */}
      <Navigation isSidebarOpen={isOpen} />
    </div>
  );
};

export default SidebarFilter;
