import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/students";

export async function getStudents() {
    return axios.get(`${STUDENT_API_BASE_URL}`);
}

export async function createStudent(student) {
    return axios.post(STUDENT_API_BASE_URL, student);
}

export async function getStudentById(studentId) {
    return axios.post(`${STUDENT_API_BASE_URL}/${studentId}`);
}

export async function updateStudent(student) {
    return axios.put(STUDENT_API_BASE_URL, student);
}

export async function deleteStudent(studentId) {
    return axios.delete(`${STUDENT_API_BASE_URL}/${studentId}`);
}