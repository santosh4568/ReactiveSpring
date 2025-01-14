package vignan.adm.Admission.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vignan.adm.Admission.Model.Student;

public interface StudentRepo extends JpaRepository<Student, Long> {
}
