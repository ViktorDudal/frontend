import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Vacancy} from '../../models/vacancy/vacancy.model';
import {VacancyService} from '../../services/vacancy.service';
import {Requirement} from 'src/app/models/requirement.model';
import { UserPrincipal } from 'src/app/models/userPrincipal.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Role } from 'src/app/models/roles.model';

@Component({
  selector: 'app-view-vacancy',
  templateUrl: './view-vacancy.component.html',
  styleUrls: ['./view-vacancy.component.scss']
})
export class ViewVacancyComponent implements OnInit {

  vacancy: Vacancy = new Vacancy();
  requirements:  Requirement[] = Array<Requirement>();
  currentUser: UserPrincipal;

  constructor(private app: AuthenticationService, private route: ActivatedRoute, private router: Router, private vacancyService: VacancyService) {
    this.app.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    let vacancyId = this.route.snapshot.paramMap.get('vacancyId');
    if (vacancyId !== null) {
      this.vacancyService.get(vacancyId)
        .subscribe(data => {
          this.vacancy = data;
        });
    }
  }

  // create(): void {
  //   this.vacancyService.createVacancy(this.vacancy,this.route.snapshot.paramMap.get('companyName'))
  //     .subscribe(data => {
  //       this.router.navigate(['/viewCompany/'+ this.route.snapshot.paramMap.get('companyName')]);
  //     }, error => console.error(error));
  // };

  // update(): void {
  //   console.log(this.vacancy);
  //     this.vacancyService.update(this.vacancy)
  //      .subscribe(data => {
  //        this.gotoList();
  //      }, error => console.error(error));

  // };


  // gotoList() {
  //   this.router.navigate(['/vacancies']);
  // }

  // employment = 'FULL PART_TIME HOURLY TRAINEE'.split(' ');
  // selectedEmployment = 'FULL';

  // changingValue(newValue) {
  //   this.selectedEmployment = newValue;
  // }


  get isCowner() {
    return this.currentUser && this.currentUser.roles  &&  this.currentUser.roles.indexOf(Role.ROLE_COWNER) > -1;
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.roles  &&  this.currentUser.roles.indexOf(Role.ROLE_ADMIN) > -1;
  }

}
