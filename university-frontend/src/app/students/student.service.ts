import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://localhost:8090/api/students';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  getStudent(email: string): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${email}`);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  updateStudent(student: Student, email: string): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${email}`, student);
  }

  deleteStudent(email: string): Observable<void> {
    const url = `${this.apiUrl}/${email}`;
    return this.http.delete<void>(url);
  }

  loadStudents(): Observable<void> {
    const url = `${this.apiUrl}/load`;
    return this.http.get<void>(url);
  }

  searchStudents(searchTerm: string): Observable<Student[]> {
    const params = new HttpParams().set('email', searchTerm);
    return this.http.get<Student[]>(`${this.apiUrl}/search`, { params });
  }
}
