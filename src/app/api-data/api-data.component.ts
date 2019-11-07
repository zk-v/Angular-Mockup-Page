import { Component, OnInit } from '@angular/core';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})

@Injectable()
export class ApiDataComponent implements OnInit {
  apiUrl = 'https://swapi.co/api/people';
  fetchedData;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
   // Making the HTTP Request
   this.http
    .get(this.apiUrl)
    .subscribe(data => {
      // Read the result field from the JSON response.
      this.fetchedData = data['results'];
      console.log(this.fetchedData);
    })
 }
}