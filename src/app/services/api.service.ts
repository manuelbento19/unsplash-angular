import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Gallery } from '../interfaces/Gallery';
import { ApiConfig } from '../api/Api.config';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient: HttpClient) { }

  fetchData(search: string): Observable<any> {
    const url = `${ApiConfig.baseUrl}?per_page=20&page=1&query=${search}&client_id=${ApiConfig.Public_Key}`;
    return this.httpClient.get<any>(url);
  }
}