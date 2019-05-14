import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';

import { VacancyComponent } from './vacancy/vacancy.component';
import { EditVacancyComponent } from './vacancy/edit-vacancy/edit-vacancy.component';

import { CompanyComponent } from './company/company.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';

import { CvComponent } from './cv/cv.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';

import { AddUserComponent } from './user/add-user/add-user.component';
import { UserComponent } from './user/user.component';

import { AdminComponent } from './admin/admin.component';
import { AccessDeniedPageComponent } from './access-denied-page/access-denied-page.component';

import { ApproveCompanyComponent } from './company/approve-company/approve-company.component';
import { SearchCVComponent } from './search-cv/search-cv.component';
import { ViewCompanyComponent } from './company/view-company/view-company.component';
import {PasswordForgotComponent} from './password-forgot/password-forgot.component';
import {PasswordRestoreComponent} from './password-restore/password-restore.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },

  { path: 'vacancies', component: VacancyComponent },
  { path: 'createVacancy/:companyId', component: EditVacancyComponent },
  { path: 'updateVacancy/:vacancyId', component : EditVacancyComponent},

  // { path: 'companies', component: CompanyComponent },
  { path: 'createCompany', component: AddCompanyComponent },
  { path: 'updateCompany/:companyId', component: AddCompanyComponent },
  { path: 'approveCompany/:companyId', component: ApproveCompanyComponent },
  { path: 'viewCompany/:companyId', component: ViewCompanyComponent },

  { path: 'cvs', component: CvComponent },
  { path: 'createCV', component: AddCvComponent },
  { path: 'updateCV/:cvId', component: AddCvComponent },

  { path: 'registration', component: AddUserComponent },
  { path: 'forgotPassword', component: PasswordForgotComponent },
  { path: 'confirmPassword', component: PasswordRestoreComponent },
  // { path: 'users', component: UserComponent },
  //
  // { path: 'admin', component: AdminComponent },
  { path: 'accessDenied', component: AccessDeniedPageComponent }

  // { path: 'searchCV', component: SearchCVComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
