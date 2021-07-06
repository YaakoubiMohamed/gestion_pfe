import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Projet } from '../classes/projet';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  headers: HttpHeaders;
  credentials: any;

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for projet consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public baseUrl = 'http://127.0.0.1:8000/api/records/projet';

  constructor(private http: HttpClient) {
    this.credentials = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.credentials.token}`
    })
   }

  

  getProjets (): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.baseUrl, { headers: this.headers }).pipe(
      tap(_ => console.log('fetched Projets')),
      catchError(this.handleError<Projet[]>('getProjets', []))
    );
  }
  createProjet(projet: Projet): Observable<any> {
    return this.http.post<Projet>('http://localhost:8000/api/records/projet', projet, { headers: this.headers }).pipe(
      tap((newProjet: Projet) => console.log(`added hero w/ id=${newProjet.id}`)),
      catchError(this.handleError<Projet>('create'))
    );
  }
  getProjet(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, { headers: this.headers });
  }
  /*
 updateProjet(id: number, projet: Projet): Observable<any> {
  return this.http.put<Projet>(`http://localhost:8000/api/projet/${id}`, projet, httpOptions).pipe(
    tap((newProjet: Projet) => console.log(`added hero w/ id=${newProjet.id}`)),
    catchError(this.handleError<Projet>('create'))
  );
}
*/
  updateProjet(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value, { headers: this.headers });
  }
  

  deleteProjet(projet: Projet | number): Observable<Projet> {
    const id = typeof projet === 'number' ? projet : projet.id;
    const url = `${'http://127.0.0.1:8000/api/records/projet'}/${id}`;
    console.log(id);

    return this.http.delete<Projet>(url, { headers: this.headers }).pipe(
      tap(_ => console.log(`deleted Projet id=${id}`)),
      catchError(this.handleError<Projet>('delete'))
    );
  }

  
  getProjetsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, { headers: this.headers });
  }
}
