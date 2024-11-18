import React from "react";
import "../styles/Home.css"; // CSS tùy chỉnh cho trang Home

function Home() {
  return (
    <div className="home-image-container">
      <img
        src="https://cdn.leverageedu.com/blog/wp-content/uploads/2020/05/22220837/Hotel-Management-Courses.png"
        alt="Hotel"
        className="home-image"
      />
    </div>
  );
}

export default Home;
