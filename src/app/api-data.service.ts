import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiDataService {
  apiUrl = 'https://swapi.co/api/';
  results;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
   // Making the HTTP Request
   this.http
    .get(this.apiUrl)
    .subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
      console.log(data);
    })
 }
}
