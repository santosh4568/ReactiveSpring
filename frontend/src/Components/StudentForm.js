import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createStudent} from '../api/StudentService';
import './StudentForm.css';

const StudentForm = () => {
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        name: '', email: '', phone: '', address: '', dob: '', course: '', branch: ''
    });

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createStudent(student);
        setStudent({ name: '', email: '', phone: '', address: '', dob: '', course: '', branch: '' });
        // window.location.href = '/students';
        navigate('/students');
    };

    return (
        <form className="student-form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" value={student.name} onChange={handleChange} required />
            <input type='email' name="email" placeholder="Email" value={student.email} onChange={handleChange} required />
            <input name="phone" placeholder="Phone" value={student.phone} onChange={handleChange} required />
            <input name="address" placeholder="Address" value={student.address} onChange={handleChange} required />
            <input type='date' name="dob" placeholder="Date of Birth" value={student.dob} onChange={handleChange} required />
            <input name="course" placeholder="Course" value={student.course} onChange={handleChange} required />
            <input name="branch" placeholder="Branch" value={student.branch} onChange={handleChange} required />
            <button type="submit">Save</button>
        </form>
    );
};

export default StudentForm;