package vignan.adm.Admission.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vignan.adm.Admission.Model.Student;
import vignan.adm.Admission.Repository.StudentRepo;

import java.util.List;


@Service
public class StudentService {
    @Autowired
    StudentRepo studentRepo;

    public Student saveStudent(Student student) {
        return studentRepo.save(student);
    }

    public List<Student> getAllStudents() {
        return studentRepo.findAll();
    }

    public Student getStudentById(Long id) {
        return studentRepo.findById(id).orElse(null);
    }

    public void deleteStudent(Long id) {
        studentRepo.deleteById(id);
    }

    public void updateStudent(Student student) {
        Student std = studentRepo.findById(student.getId()).orElse(null);
        if(std != null) {
            std.setName(student.getName());
            std.setEmail(student.getEmail());
            std.setPhone(student.getPhone());
            std.setAddress(student.getAddress());
            std.setDob(student.getDob());
            std.setCourse(student.getCourse());
            std.setBranch(student.getBranch());
        }
        studentRepo.save(student);
    }
}
