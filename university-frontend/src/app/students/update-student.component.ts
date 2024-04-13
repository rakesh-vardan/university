import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './student.service'
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Student, Name, Location, Street, Coordinates, Timezone, Login, Dob, Registered, Id, Picture } from './student';

@Component({
  selector: 'update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
  providers: [StudentService]
})
export class UpdateStudentComponent implements OnInit {

  studentForm!: FormGroup;
  email!: string;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router) { }

  ngOnInit() {
    this.studentForm = this.fb.group({
      // title: [''],
      name: this.fb.group(new Name()),
      // gender: [''],
      email: [''],
      location: this.fb.group({
        street: this.fb.group(new Street()),
        city: [''],
        state: [''],
        country: [''],
      }),
      phone: [''],
    });

    const emailParam = this.route.snapshot.paramMap.get('email');
    this.email = emailParam ? emailParam : '';

    this.studentService.getStudent(this.email).subscribe(student => {
      console.log('Student:', student);
      if (student && student.name) {
        this.studentForm.patchValue({
          name: {
            first: student.name.first,
            last: student.name.last
          },
          email: student.email,
          location: {
            street: {
              number: student.location.street.number,
              name: student.location.street.name
            },
            city: student.location.city,
            state: student.location.state,
            country: student.location.country
          },
          phone: student.phone
        });
      }
    });
  }

  updateStudent() {
    this.studentService.updateStudent(this.studentForm.value, this.email).subscribe(() => {
      console.log('Student updated successfully');
      this.router.navigate(['/app-student']);
    });
  }
}
