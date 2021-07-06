import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {ApiService} from "./api.service";

import { environment } from '../../../environments/environment';
import { User } from '../classes/user';
import { Router } from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const BASE_URL="http://127.0.0.1:8000";
const apiUrl = 'http://127.0.0.1:8000/api/records/departement';
const user_email = 'http://127.0.0.1:8000/api/records/user/';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends ApiService {
    
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
  
    constructor(protected httpClient: HttpClient, private router: Router) {
      super(httpClient);
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
    }
  
    public get currentUserValue(): User {
      return this.currentUserSubject.value;
    }

    getUserByEmail(token, email: string): Observable<any> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.token}`
      });
      console.log(token.token);
      const test ='mohamedyaakoubiweb@gmail.com';
      return this.httpClient.get(`${user_email}`, { headers: headers });
      // return this.http.get(`${this.baseUrl}/${id}`);
    }
  
  
    logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      this.router.navigate(['/login']);
    }
  
    login(email: string, password: string): Observable<User> {
      return this.httpClient.post<any>('http://127.0.0.1:8000/api/login_check', { email, password }, httpOptions)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                console.log('currentUser',user); 
                return user;
            }));
      /*
      return this.httpClient.post<any>('http://127.0.0.1:8000/api/login_check', {email: username, password: password})
        .pipe(
          map(user => {
            // login successful if there's a jwt token in the response
            console.log(user);
            if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
            }
            return user;
          }),
          catchError(error => {
            //this.router.navigate(['newpage']);
            console.log(error);
            return throwError(error);
          })
        );
        */
    }
  }