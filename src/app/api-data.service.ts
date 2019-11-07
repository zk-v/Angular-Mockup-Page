import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {A } from './customer';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  apiURL: string = 'https://swapi.co/api/';

  constructor(private httpClient: HttpClient) {}
}
