import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Armament } from '../models/armament/armament';

@Injectable({
  providedIn: 'root'
})
export class ArmamentService {
  private baseUrl = 'http://localhost:8082/'; // adjust port to match server
private url = this.baseUrl + 'api/armaments'; // change 'todos' to your API path

  constructor(
    private http: HttpClient
  ) { }

index(): Observable<Armament[]> {
  return this.http.get<Armament[]>(this.url + '?sorted=true').pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(
        () => new Error('ArmamentService.index(): error retrieving armaments: ' + err)
      );
    })
  );
}

create(armament: Armament): Observable<Armament> {
  return this.http.post<Armament>(this.url, armament).pipe(
    catchError((err: any) => {
      console.error(err);
      return throwError(
        () => new Error(err)
      );
    })
  );
}

update(armament: Armament) {

  return this.http.put<Armament>(this.url + '/' + armament.id, armament).pipe(
    catchError((err: any) => {
      console.error(err);
      return throwError(
         () => new Error(
          'ArmamentService.update():error updating Armament: ' + err )
      );
    })
  );
}

destroy(id: number) {
  return this.http.delete<void>(this.url + '/' + id).pipe(
    catchError((err: any) => {
      console.error(err);
      return throwError(
         () => new Error(
          'ArmamentService.destroy():error deleting armament: ' + err )
      );
    })
  );
}

}
