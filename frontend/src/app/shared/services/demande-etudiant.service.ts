import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Demande } from '../classes/demande';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DemandeEtudiantService {

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

  public baseUrl = 'http://127.0.0.1:8000/api/records/demande';
  public demandes = 'http://localhost:8000/api/demandes';

  constructor(private http: HttpClient) {
    this.credentials = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.credentials.token}`
    })
   }

  

  getDemandes (): Observable<Demande[]> {
    return this.http.get<Demande[]>(this.baseUrl, { headers: this.headers }).pipe(
      tap(_ => console.log('fetched Demandes')),
      catchError(this.handleError<Demande[]>('getDemandes', []))
    );
  }
  createDemande(demande: Demande): Observable<any> {
    return this.http.post<Demande>('http://localhost:8000/api/records/demande', demande, { headers: this.headers }).pipe(
      tap((newDemande: Demande) => console.log(`added hero w/ id=${newDemande.id}`)),
      catchError(this.handleError<Demande>('create'))
    );
  }
  getDemande(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, { headers: this.headers });
  }
  /*
 updateDemande(id: number, demande: Demande): Observable<any> {
  return this.http.put<Demande>(`http://localhost:8000/api/demande/${id}`, demande, httpOptions).pipe(
    tap((newDemande: Demande) => console.log(`added hero w/ id=${newDemande.id}`)),
    catchError(this.handleError<Demande>('create'))
  );
}
*/
  updateDemande(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value, { headers: this.headers });
  }
  

  deleteDemande(demande: Demande | number): Observable<Demande> {
    const id = typeof demande === 'number' ? demande : demande.id;
    const url = `${'http://127.0.0.1:8000/api/records/demande'}/${id}`;
    console.log(id);

    return this.http.delete<Demande>(url, { headers: this.headers }).pipe(
      tap(_ => console.log(`deleted Demande id=${id}`)),
      catchError(this.handleError<Demande>('delete'))
    );
  }

  
  getDemandesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, { headers: this.headers });
  }
}
