# Student Management System

This project is a Student Management System built using Java, Spring Boot, Maven, and React. It allows users to manage student information, including adding, editing, deleting, and viewing student details.

## Features

- Add new students
- Edit existing student details
- Delete students
- View a list of all students
- Search for students by ID

## Technologies Used

- **Backend:**
  - Java
  - Spring Boot
  - Maven

- **Frontend:**
  - JavaScript
  - React
  - npm

## Project Structure

### Backend

The backend is built using Spring Boot and provides RESTful APIs for managing student data. The main components are:

- `StudentController.java`: Handles HTTP requests and maps them to the appropriate service methods.
- `StudentService.java`: Contains the business logic for managing students.
- `StudentRepository.java`: Interface for CRUD operations on the student database.

### Frontend

The frontend is built using React and provides a user interface for interacting with the student management system. The main components are:

- `App.js`: Main application component that sets up routing.
- `Navbar.js`: Navigation bar component.
- `StudentList.js`: Component for displaying the list of students.
- `StudentForm.js`: Component for adding and editing student details.
- `StudentService.js`: Contains functions for making API calls to the backend.

## Getting Started

### Prerequisites

- Java 11 or higher
- Maven
- Node.js and npm

## Steps to Run the Application

### Clone the repository:
   ```bash
   git clone https://github.com/santosh4568/ReactiveSpring.git
   cd ReactiveSpring
   ```

### Backend Setup

1. Build the project using Maven:
   ```bash
   mvn clean install
   ```

2. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm start
   ```

## Running the Application

- The backend server will be running at [http://localhost:8080](http://localhost:8080).
- The frontend application will be running at [http://localhost:3000](http://localhost:3000).

## API Endpoints

- **GET /students**: Retrieve all students
- **POST /students**: Add a new student
- **POST /students/{id}**: Retrieve a student by ID
- **PUT /students**: Update an existing student
- **DELETE /students/{id}**: Delete a student by ID

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- Spring Boot
- React
- Maven
