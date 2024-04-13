import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student, Name, Location, Street, Coordinates, Timezone, Login, Dob, Registered, Id, Picture } from './student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  studentForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router) {
    this.studentForm = this.fb.group({
      title: [''],
      name: this.fb.group(new Name()),
      gender: [''],
      email: [''],
      location: this.fb.group({
        street: this.fb.group(new Street()),
        city: [''],
        state: [''],
        country: [''],
      }),
      phone: [''],
    });
  }

  addStudent(): void {
    const student: Student = this.studentForm.value;
    this.studentService.addStudent(student).subscribe({
      next: (value: Student) => {
        this.router.navigate(['/app-student']);
      },
      error: (error: any) => {
        console.error('Error adding student:', error);
      }
    });
  }
}

