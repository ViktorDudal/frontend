import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Vacancy} from '../models/vacancy/vacancy.model';
import {Observable} from 'rxjs';
import { Requirement } from '../models/requirement.model';
import {SearchResumeResponse} from '../models/SearchModel/SearchResumeResponse.model';
import {SearchVacancyComponent} from '../search-vacancy/search-vacancy.component';
import { VacancyDTO } from '../models/vacancy/vacancyDTO.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private http: HttpClient) {
  }

  private vacancyUrl = 'http://localhost:8080/vacancies';
  private requirementUrl = 'http://localhost:8080/requirements';

  public findAll(): Observable<any> {
    return this.http.get(this.vacancyUrl , httpOptions);
  }

  public findVacanciesByCompanyId(companyId : string, first : number): Observable<any> {
    return this.http.get<VacancyDTO>(this.vacancyUrl + '/' + companyId + "/" + first , httpOptions);
  }

  public findAllWithPagination(first: number) : Observable<any> {
    return this.http.get<VacancyDTO>(this.vacancyUrl + "/findAll/" + first, httpOptions);
  }

  public findAllHotVacanciesWithPagination(first: number) : Observable<any> {
    return this.http.get<VacancyDTO>(this.vacancyUrl + "/hotVacancies/" + first, httpOptions);
  }

  get(vacancyId: string) {
    return this.http.get<Vacancy>(this.vacancyUrl + '/' + vacancyId, httpOptions);
  }

  public deleteById(id: any) {
    return this.http.delete(this.vacancyUrl + '/' + id, httpOptions);
  }

  public deleteRequiremnetById(id: any) {
    return this.http.delete(this.requirementUrl + '/' + id, httpOptions);
  }

  public update(vacancy: any): Observable<Vacancy> {
    return this.http.put<Vacancy>(this.vacancyUrl , vacancy, httpOptions);
  }

  public createVacancy(vacancy: Vacancy, companyId : any): Observable<Object> {
    return this.http.post<Vacancy>(this.vacancyUrl + '/createVacancy/' + companyId, vacancy, httpOptions);
  }
  public updateRequirement(requirement: any): Observable<Requirement> {
    return this.http.put<Requirement>(this.vacancyUrl + '/updateRequirement', requirement , httpOptions);
  }


}
