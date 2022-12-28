import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { SigninComponent } from './components/user/signin/signin.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddDetailsComponent } from './components/details/add-details/add-details.component';
import { AddBasicDetailsComponent } from './components/basicDetails/add-basic-details/add-basic-details.component';
import { AddStaffComponent } from './components/staff/add-staff/add-staff.component';
import { AddMonthlyFeesComponent } from './components/monthlyFees/add-monthly-fees/add-monthly-fees.component';
import { AddCourseComponent } from './components/course/add-course/add-course.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "addDetails",
    component: AddDetailsComponent
  },
  {
    path: "addBasicDetails",
    component: AddBasicDetailsComponent
  },
  {
    path: "addStaff",
    component: AddStaffComponent
  },
  {
    path: "addMonthlyFees",
    component: AddMonthlyFeesComponent
  },
  {
    path: "addCourse",
    component: AddCourseComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
