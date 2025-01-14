package vignan.adm.Admission.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vignan.adm.Admission.Model.Student;
import vignan.adm.Admission.Service.StudentService;

import java.net.URI;
import java.util.List;


@RestController
@RequestMapping("/students")
public class StudentController {
    @Autowired
    StudentService studentService;

    @PostMapping
    public ResponseEntity<Student> saveStudent(@RequestBody Student student) {
        return ResponseEntity.created(URI.create("/students/sID")).body(studentService.saveStudent(student));
    }

    @PostMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable(value = "id") Long id) {
        if(studentService.getStudentById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(studentService.getStudentById(id));
    }

    @GetMapping
    public ResponseEntity<List<Student>> getAllStudents() {
        return ResponseEntity.ok().body(studentService.getAllStudents());
    }

    @PutMapping
    public ResponseEntity<Student> updateStudent(@RequestBody Student student) {
        studentService.updateStudent(student);
        return ResponseEntity.ok().body(student);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable(value = "id") Long id) {
        studentService.deleteStudent(id);
        return ResponseEntity.ok().body("Student with id " + id + " deleted successfully");
    }



}
