import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Student Admission Portal</h1>
      <p>This project is designed to manage student admissions efficiently.</p>
      <p>Features include:</p>
      <ul>
        <li>View student list</li>
        <li>Add new students</li>
        <li>Edit student details</li>
        <li>Delete students</li>
      </ul>
    </div>
  );
};

export default Home;