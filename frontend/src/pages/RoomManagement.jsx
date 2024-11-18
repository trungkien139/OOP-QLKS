import React, { useState } from "react";
import SidebarFilter from "../components/SidebarFilter";
import RoomCard from "../components/RoomCard";
import Modal from "../components/Modal"; // Import Modal component

import "./Rooms.css";

const RoomManagement = () => {
  const [filters, setFilters] = useState({});
  const [selectedRoom, setSelectedRoom] = useState(null); // Trạng thái lưu phòng đã chọn
  const [isModalOpen, setIsModalOpen] = useState(false); // Trạng thái modal

  const rooms = [
    {
      id: "P101",
      status: "available",
      hours: 0,
      cleaningStatus: true,
      customerName: "Nguyễn Văn A",
      customerPhone: "123456789",
      numberOfPeople: 2,
    },
    {
      id: "P202",
      status: "booked",
      hours: 5,
      cleaningStatus: false,
      customerName: "Trần Thị B",
      customerPhone: "987654321",
      numberOfPeople: 3,
    },
    {
      id: "P303",
      status: "available",
      hours: 0,
      cleaningStatus: true,
      customerName: "",
      customerPhone: "",
      numberOfPeople: 0,
    },
    // Thêm các phòng khác...
  ];

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredRooms = rooms.filter((room) => {
    if (filters.roomType === "Tất cả loại phòng") return true;
    return room.roomType === filters.roomType;
  });

  const openModal = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  const handleCheckIn = () => {
    console.log("Nhận phòng", selectedRoom.id);
    // Xử lý logic nhận phòng
    closeModal();
  };

  const handleSave = () => {
    console.log("Lưu thông tin phòng", selectedRoom.id);
    // Xử lý lưu thông tin phòng
    closeModal();
  };

  return (
    <div className="room-management">
      <div className="sidebar">
        <SidebarFilter filters={filters} onFilterChange={handleFilterChange} />
      </div>
      <div className="room-list">
        {filteredRooms.map((room) => (
          <RoomCard key={room.id} room={room} onClick={() => openModal(room)} />
        ))}
      </div>

      {/* Modal hiển thị thông tin chi tiết phòng */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        room={selectedRoom}
        onCheckIn={handleCheckIn}
        onSave={handleSave}
      />
    </div>
  );
};

export default RoomManagement;
