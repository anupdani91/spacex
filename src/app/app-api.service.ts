import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppApiService {
  baseUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
  constructor(private http: HttpClient) {}

  getSpaceLaunchProgram(parameters: any[]): Observable<any[]> {
    let queryParams = '';
    parameters.forEach((element) => {
      queryParams = queryParams + '&' + element.fieldName + '=' + element.value;
    });
    return this.http.get<any[]>(this.baseUrl + '' + queryParams);
  }
}
