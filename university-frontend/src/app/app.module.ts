import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StudentComponent } from './students/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStudentComponent } from './students/add-student.component';
import { AppRoutingModule } from './app.routes';
import { UrlSerializer } from '@angular/router';
import { CustomUrlSerializer } from './custom-url-serializer';
import { UpdateStudentComponent } from './students/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddStudentComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: UrlSerializer, useClass: CustomUrlSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
