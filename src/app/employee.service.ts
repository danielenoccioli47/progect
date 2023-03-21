import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { ServerData } from './types/EmployeeData';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }


  getDataRows(apiURL:string):Observable<ServerData>{
    return this.http.get<ServerData>(apiURL)
    .pipe(retry(1));
  }


}
