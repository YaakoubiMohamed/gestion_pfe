import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Soutenance } from '../classes/soutenance';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SoutenanceService {
  credentials: any;
  headers: HttpHeaders;

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for soutenance consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public baseUrl = 'http://127.0.0.1:8000/api/records/soutenance';

  constructor(private http: HttpClient) { 
    this.credentials = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.credentials.token}`
    })
  }

  

  getSoutenances (): Observable<Soutenance[]> {
    return this.http.get<Soutenance[]>(this.baseUrl, { headers: this.headers }).pipe(
      tap(_ => console.log('fetched Soutenances')),
      catchError(this.handleError<Soutenance[]>('getSoutenances', []))
    );
  }
  createSoutenance(soutenance: Soutenance): Observable<any> {
    return this.http.post<Soutenance>('http://localhost:8000/api/records/soutenance', soutenance, { headers: this.headers }).pipe(
      tap((newSoutenance: Soutenance) => console.log(`added hero w/ id=${newSoutenance.id}`)),
      catchError(this.handleError<Soutenance>('create'))
    );
  }
  getSoutenance(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, { headers: this.headers });
  }
  /*
 updateSoutenance(id: number, soutenance: Soutenance): Observable<any> {
  return this.http.put<Soutenance>(`http://localhost:8000/api/soutenance/${id}`, soutenance, httpOptions).pipe(
    tap((newSoutenance: Soutenance) => console.log(`added hero w/ id=${newSoutenance.id}`)),
    catchError(this.handleError<Soutenance>('create'))
  );
}
*/
  updateSoutenance(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value, { headers: this.headers });
  }
  

  deleteSoutenance(soutenance: Soutenance | number): Observable<Soutenance> {
    const id = typeof soutenance === 'number' ? soutenance : soutenance.id;
    const url = `${'http://127.0.0.1:8000/api/records/soutenance'}/${id}`;
    console.log(id);

    return this.http.delete<Soutenance>(url, { headers: this.headers }).pipe(
      tap(_ => console.log(`deleted Soutenance id=${id}`)),
      catchError(this.handleError<Soutenance>('delete'))
    );
  }

  
  getSoutenancesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, { headers: this.headers });
  }
}
