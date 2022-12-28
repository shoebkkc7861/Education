import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './components/user/signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/user/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddDetailsComponent } from './components/details/add-details/add-details.component';
import { AddBasicDetailsComponent } from './components/basicDetails/add-basic-details/add-basic-details.component';
import { AddStudentAssignmentComponent } from './components/studentAssignment/add-student-assignment/add-student-assignment.component';
import { AddAssignmentComponent } from './components/assignment/add-assignment/add-assignment.component';
import { AddStaffComponent } from './components/staff/add-staff/add-staff.component';
import { AddMonthlyFeesComponent } from './components/monthlyFees/add-monthly-fees/add-monthly-fees.component';
import { AddCourseComponent } from './components/course/add-course/add-course.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    AddDetailsComponent,
    AddBasicDetailsComponent,
    AddStudentAssignmentComponent,
    AddAssignmentComponent,
    AddStaffComponent,
    AddMonthlyFeesComponent,
    AddCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
