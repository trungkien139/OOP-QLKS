import React from "react";
import "./Modal.css"; // Thêm file CSS tùy chỉnh cho modal

const Modal = ({ isOpen, onClose, room, onCheckIn, onSave }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Thông tin chi tiết phòng {room.id}</h2>
        <div>
          <p>
            <strong>Trạng thái:</strong> {room.status}
          </p>
          <p>
            <strong>Họ và tên khách hàng:</strong>{" "}
            {room.customerName || "Chưa có khách"}
          </p>
          <p>
            <strong>Số điện thoại:</strong>{" "}
            {room.customerPhone || "Chưa có số điện thoại"}
          </p>
          <p>
            <strong>Số người:</strong>{" "}
            {room.numberOfPeople || "Chưa có thông tin"}
          </p>
          <p>
            <strong>Trạng thái dọn dẹp:</strong>{" "}
            {room.cleaningStatus ? "Đã dọn dẹp" : "Chưa dọn dẹp"}
          </p>
        </div>

        <div className="modal-actions">
          <button onClick={onCheckIn}>Nhận phòng</button>
          <button onClick={onSave}>Lưu</button>
          <button onClick={onClose}>Thoát</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
