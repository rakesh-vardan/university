package com.education.universityapp.controller;

import com.education.universityapp.model.Student;
import com.education.universityapp.model.StudentOutput;
import com.education.universityapp.service.StudentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {

    @Autowired
    private StudentsService studentsService;

    @GetMapping
    public ResponseEntity<List<Student>> get() {
        List<Student> studentList = studentsService.getStudents();
        return ResponseEntity.ok(studentList);
    }

    @PostMapping
    public ResponseEntity<StudentOutput> add(@RequestBody Student student) {
        StudentOutput addedStudent = studentsService.addStudent(student);
        return ResponseEntity.ok(addedStudent);
    }

    @PutMapping("/{email}")
    public ResponseEntity<Student> update(@RequestBody Student student,
                                          @PathVariable("email") String email) {
        Student updatedStudent = studentsService.updateStudent(student, email);
        return ResponseEntity.ok(updatedStudent);
    }

    @GetMapping("/load")
    public ResponseEntity<String> load() {
        studentsService.loadStudents();
        return ResponseEntity.ok("OK");
    }

    @DeleteMapping("/{email}")
    public ResponseEntity<Void> delete(@PathVariable("email") String email) {
        studentsService.deleteStudent(email);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/search")
    public ResponseEntity<List<Student>> search(@RequestParam("email") String email) {
        List<Student> studentList = studentsService.searchStudents(email);
        return ResponseEntity.ok(studentList);
    }
}
