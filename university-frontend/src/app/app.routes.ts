import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from '../app/students/add-student.component';
import { StudentComponent } from './students/student.component';
import { UpdateStudentComponent } from './students/update-student.component';

const routes: Routes = [
  { path: 'app-student', component: StudentComponent },
  { path: 'app-add-student', component: AddStudentComponent },
  { path: 'update-student/:email', component: UpdateStudentComponent },
  { path: '', redirectTo: '/app-student', pathMatch: 'full' } // redirect to `app-student` path by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
