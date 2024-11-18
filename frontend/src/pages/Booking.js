import React, { useState } from "react";
import BookingModal from "../components/BookingModal"; // Import BookingModal đã thiết kế
import "./Booking.css"; // CSS riêng cho Booking

const Booking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Tìm kiếm
  const bookings = [
    {
      id: 1,
      customer: "Nguyễn Văn A",
      date: "03/10/2021",
      staff: "Nguyễn Văn NNN",
    },
    {
      id: 2,
      customer: "Bùi Thị Hồng Hương",
      date: "03/10/2021",
      staff: "Nguyễn Văn NNN",
    },
    {
      id: 3,
      customer: "Nguyễn Tiến D",
      date: "13/10/2021",
      staff: "Nguyễn Văn Duy",
    },
    // Thêm dữ liệu khác...
  ];

  // Lọc dữ liệu dựa trên tìm kiếm
  const filteredBookings = bookings.filter((booking) =>
    booking.customer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Hàm mở/đóng modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="booking-container">
      {/* Thanh tìm kiếm */}
      <div className="booking-header">
        <input
          type="text"
          placeholder="Tìm theo tên khách hàng"
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="add-booking-btn" onClick={openModal}>
          Đặt phòng
        </button>
      </div>

      {/* Bảng danh sách phiếu thuê */}
      <table className="booking-table">
        <thead>
          <tr>
            <th>Số phiếu thuê</th>
            <th>Tên khách hàng</th>
            <th>Ngày lập phiếu</th>
            <th>Tên nhân viên</th>
            <th>Chi tiết</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.customer}</td>
              <td>{booking.date}</td>
              <td>{booking.staff}</td>
              <td>
                <button className="detail-btn">Chi tiết</button>
              </td>
              <td>
                <button className="delete-btn">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal đặt phòng */}
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Booking;
