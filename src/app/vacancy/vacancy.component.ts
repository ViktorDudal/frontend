import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Vacancy} from '../models/vacancy.model';
import {VacancyService} from '../services/vacancy.service';
import {CompanyService} from '../services/company.service';
import {Observable} from 'rxjs';
import {Requirement} from '../models/requirement.model';
import {AuthenticationService} from '../services/authentication.service';
import {Role} from '../models/roles.model';
import {UserPrincipal} from '../models/userPrincipal.model';
import {Search} from '../models/SearchModel/search.model';
import {SearchVacancyComponent} from '../search-vacancy/search-vacancy.component';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'rabotyNet',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
  vacancies: Observable<Vacancy[]>;
  search: Search = new Search();
  requirements: Observable<Requirement[]>;

  currentUser: UserPrincipal;
  // companies: Company[];

  p: number = 1;

  vacancy: Vacancy = new Vacancy();

  page: number = 0;
  count: number = 6;
  size: number = 0;

  constructor(private app: AuthenticationService, private router: Router, private route: ActivatedRoute, private vacancyService: VacancyService, private companyService: CompanyService) {
    this.app.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.search.searchDocument = 'vacancies';
    this.vacancyService.getCountOfAllVacancies().subscribe(data => {
      this.size = data;
    });
    this.findAll();
  };

  findAll() {
    this.vacancyService.findAllWothPagination(this.page * this.count, this.count).subscribe(
      data => {
        this.vacancies = data;
        console.log(this.vacancies);
      }
    );
  }

  gotoList() {
    this.router.navigate(['/vacancies']);
  }

  update(vacancyId): void {
    this.vacancyService.update(this.vacancyService.get(vacancyId))
      .subscribe(data => {
        this.gotoList();
      }, error => console.error(error));
  };

  deleteById(id: number): void {
    this.vacancyService.deleteById(id)
      .subscribe(
        data => {
          this.findAll();
        },
        error => console.log(error));
  };

  get isAdmin() {
    return this.currentUser && this.currentUser.roles && this.currentUser.roles.indexOf(Role.ROLE_ADMIN) > -1;
  }

  get isCowner() {
    return this.currentUser && this.currentUser.roles && this.currentUser.roles.indexOf(Role.ROLE_COWNER) > -1;
  }

  get isUser() {
    return this.currentUser && this.currentUser.roles && this.currentUser.roles.indexOf(Role.ROLE_USER) > -1;
  }

  logout() {
    const user = this.app.logout();
    this.router.navigateByUrl('/vacancies');
  }

  canPrev(): boolean {
    return this.page > 0;
  }

  prev() {
    if (this.canPrev()) {
      this.page = this.page - 1;
      this.findAll();
    }
  }

  canNext(): boolean {
    return (this.page + 1) * this.count < this.size;
  }

  next() {
    if (this.canNext()) {
      this.page = this.page + 1;
      this.findAll();
    }
  }

  searchCVPage() {
    this.router.navigateByUrl('/searchCV');
  }
}
