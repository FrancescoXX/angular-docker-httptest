import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, delay } from 'rxjs/operators';
import { Observable, throwError, Subject, BehaviorSubject, from } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class HttpTestService {

  BASEURL = 'http://192.168.10.78:3001';

  versionURL = `${this.BASEURL}/dev/version`;
  authTokenURL = `${this.BASEURL}/auth/token`;

  constructor(private http: HttpClient) { }

  getTest = () => {
    return this.http.get<any>(this.versionURL)
      .pipe(
        catchError(this.handleError));
  }

  authToken = (bodyrequest: any) => {
    return this.http.post<any>(this.authTokenURL, bodyrequest)
      .pipe(
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}