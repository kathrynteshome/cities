import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Experience } from './experience';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  constructor(private httpClient: HttpClient) { }

  getExperiences(): Observable<Experience> {
    return this.httpClient.get<Experience>("https://www.boredapi.com/api/activity")
    .pipe(
        catchError(this.handleError<Experience>('getExperiences'))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
    private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
  

    // Let the app keep running by returning an empty result.
    return error;
    };
}
}
