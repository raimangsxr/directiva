import { Injectable } from '@angular/core';
import {Socio} from '../models/socio';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Socio[]> {
    return this.http.get<Socio[]>('http://192.168.1.54:8000/api/member/', {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Token 71c0a71dbdaf9945bd25d97ccf9802e92f98f4f6'
      })
    })
    .pipe(map(socios => socios.map(socio => new Socio().deserialize(socio))));
  }

  getMember(id: number): Observable<Socio> {
    return this.http.get<Socio>('http://192.168.1.54:8000/api/member/' + id, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Token 71c0a71dbdaf9945bd25d97ccf9802e92f98f4f6'
      })
    })
    .pipe(map(socio => new Socio().deserialize(socio)));
  }
}
