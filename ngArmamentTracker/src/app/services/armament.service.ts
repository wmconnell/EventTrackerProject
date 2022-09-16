import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArmamentService {
  private baseUrl = 'http://localhost:8082/'; // adjust port to match server
private url = this.baseUrl + 'api/armaments'; // change 'todos' to your API path

  constructor(
    private http: HttpClient
  ) { }
}
