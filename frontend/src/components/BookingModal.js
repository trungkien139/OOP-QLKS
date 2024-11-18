import React from "react";
import "./BookingModal.css";

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Đặt Phòng</h2>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>

        <div className="modal-content">
          {/* Thông tin khách hàng */}
          <div className="modal-section">
            <h3>Thông tin khách hàng</h3>
            <input type="text" placeholder="Nhập họ tên khách hàng" />
            <input type="text" placeholder="Nhập CCCD" maxLength={12} />
            <input type="text" placeholder="Nhập SĐT" maxLength={10} />
            <input type="text" placeholder="Nhập địa chỉ" />
            <input type="text" placeholder="Nhập quốc tịch" />
            <select>
              <option value="">Giới tính</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>

          {/* Thông tin phòng */}
          <div className="modal-section">
            <h3>Thông tin phòng</h3>
            <div>
              <label>Ngày bắt đầu:</label>
              <input type="date" />
            </div>
            <div>
              <label>Ngày kết thúc:</label>
              <input type="date" />
            </div>
            <div>
              <label>Giờ bắt đầu:</label>
              <input type="time" />
            </div>
            <div>
              <label>Giờ kết thúc:</label>
              <input type="time" />
            </div>
          </div>

          {/* Danh sách phòng trống */}
          <div className="modal-section">
            <h3>Danh sách phòng trống</h3>
            <table>
              <thead>
                <tr>
                  <th>Số phòng</th>
                  <th>Loại phòng</th>
                  <th>Thêm</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>P101</td>
                  <td>Phòng đơn</td>
                  <td>
                    <button className="add-room-btn">+</button>
                  </td>
                </tr>
                {/* Các phòng khác */}
              </tbody>
            </table>
          </div>

          {/* Phòng đã chọn */}
          <div className="modal-section">
            <h3>Phòng đã chọn</h3>
            <table>
              <thead>
                <tr>
                  <th>Số phòng</th>
                  <th>Số người</th>
                  <th>Ngày BD</th>
                </tr>
              </thead>
              <tbody>{/* Hiển thị danh sách phòng đã chọn */}</tbody>
            </table>
          </div>
        </div>

        {/* Nút Lưu và Hủy */}
        <div className="modal-actions">
          <button className="save-btn">Lưu</button>
          <button className="cancel-btn" onClick={onClose}>
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
