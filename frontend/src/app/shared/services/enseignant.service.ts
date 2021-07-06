import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../classes/user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  credentials: any;
  headers: HttpHeaders;

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public baseUrl = 'http://127.0.0.1:8000/api/records/user';
  public entrepriseUrl = 'http://127.0.0.1:8000/api/records/entreprise';

  constructor(private http: HttpClient) { 
    this.credentials = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.credentials.token}`
    })
  }

  

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl, { headers: this.headers }).pipe(
      tap(_ => console.log('fetched Users')),
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  getEntreprises (): Observable<User[]> {
    return this.http.get<User[]>(this.entrepriseUrl, { headers: this.headers }).pipe(
      tap(_ => console.log('fetched Users')),
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }
  createUser(user): Observable<any> {
    return this.http.post<User>('http://localhost:8000/register', user, { headers: this.headers }).pipe(
      tap((newUser: User) => console.log(`added hero w/ id=${newUser}`)),
      catchError(this.handleError<User>('create'))
    );
  }
  createEntreprise(user): Observable<any> {
    return this.http.post<User>('http://localhost:8000/api/records/entreprise', user, { headers: this.headers }).pipe(
      tap((newUser: User) => console.log(`added hero w/ id=${newUser.id}`)),
      catchError(this.handleError<User>('create'))
    );
  }
  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  /*
 updateUser(id: number, user: User): Observable<any> {
  return this.http.put<User>(`http://localhost:8000/api/user/${id}`, user, httpOptions).pipe(
    tap((newUser: User) => console.log(`added hero w/ id=${newUser.id}`)),
    catchError(this.handleError<User>('create'))
  );
}
*/
  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value, { headers: this.headers });
  }
  

  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${'http://127.0.0.1:8000/api/records/user'}/${id}`;
    console.log(id);

    return this.http.delete<User>(url, { headers: this.headers }).pipe(
      tap(_ => console.log(`deleted Soutenance id=${id}`)),
      catchError(this.handleError<User>('delete'))
    );
  }

  
  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, { headers: this.headers });
  }
}
