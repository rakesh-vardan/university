import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../students/student.service';
import { Student } from '../students/student';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  searchControl = new FormControl();
  students: Student[] = [];
  loading = false;

  constructor(private router: Router,
    private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();

    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      this.searchStudents(searchTerm);
    });
  }

  searchStudents(searchTerm: string) {
    this.studentService.searchStudents(searchTerm).subscribe(students => {
      this.students = students;
    });
  }

  loadStudents(): void {
    this.studentService.loadStudents().subscribe({
      next: () => {
        this.getStudents(); // fetch the list of students again
      },
      error: error => {
        console.error('Error loading students:', error);
        this.loading = false;
      }
    });
  }

  // loadStudents(): void {
  //   this.studentService.loadStudents().toPromise().then(() => {
  //     this.getStudents(); // fetch the list of students again
  //   }).catch(error => {
  //     console.error('Error loading students:', error);
  //   });
  // }

  addStudent(): void {
    console.log('Navigating to Add Student...');
    this.router.navigate(['app-add-student']);
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

  updateStudent(email: string): void {
    this.router.navigate([`/update-student`, email]);
  }

  deleteStudent(email: string): void {
    this.studentService.deleteStudent(email)
      .subscribe(() => this.getStudents());
  }
}
