import React from "react";
import "./RoomCard.css";

const RoomCard = ({ room, onClick }) => {
  return (
    <div className={`room-card ${room.status}`} onClick={onClick}>
      <h3> Phòng: {room.id}</h3>
      <p>
        {" "}
        Trạng thái:{room.status === "available" ? "Phòng trống" : "Đã đặt"}
      </p>
      <div className="details">
        <span>⏱ {room.hours} giờ</span>
        <span>{room.cleaningStatus ? "✔ Đã dọn dẹp" : "✘ Chưa dọn dẹp"}</span>
      </div>
    </div>
  );
};

export default RoomCard;
