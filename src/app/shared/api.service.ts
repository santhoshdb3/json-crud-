import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { companymodel } from '../Model/companymodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
// i have decided to save and retrive the form data to edit in angular crud method ,write
  constructor(private http: HttpClient) { }
  apiurl = 'http://localhost:3000/site';

  Getallform(): Observable<companymodel[]> {
    return this.http.get<companymodel[]>(this.apiurl);
  }

  GetCformbycode(id: any): Observable<companymodel> {
    return this.http.get<companymodel>(this.apiurl + '/' + id);
  }

  Removeformbycode(id: any) {
    return this.http.delete(this.apiurl + '/' + id);
  }

  Createform(sitedata: any) {
    return this.http.post(this.apiurl, sitedata);
  }

  Updateform(id: any, sitedata: any) {
    return this.http.put(this.apiurl + '/' + id, sitedata);
  }

}
