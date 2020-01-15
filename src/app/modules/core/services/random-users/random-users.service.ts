import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators/';
import * as Sentry from '@sentry/browser';
interface User {
  email: string;
  gender: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {

  constructor(private http: HttpClient) { }

  getRandomUsers(): Observable<User[]> {
    return this.http.get('https://randoomuser.me/api/?results=3')
    .pipe(
      catchError(error => {
        return this.handleError(error);
      }),
      map((response: any) => response.results as User[])
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // Sentry.captureException(error);
    return throwError('Error al hacer la petición');
  }
}
