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

import { SearchCVComponent } from './search-cv/search-cv.component'

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },

  { path: 'vacancies', component: VacancyComponent },
  { path: 'createVacancy', component: EditVacancyComponent },

  { path: 'companies', component: CompanyComponent },
  { path: 'createCompany', component: AddCompanyComponent },
  { path: 'updateCompany/:companyId', component: AddCompanyComponent },

  { path: 'cvs', component: CvComponent },
  { path: 'createCV', component: AddCvComponent },

  { path: 'registration', component: AddUserComponent },
  { path: 'users', component: UserComponent },

  { path: 'searchCV', component: SearchCVComponent }
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
