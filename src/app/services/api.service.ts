import { Injectable } from '@angular/core';
import {Member} from '../models/member';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>('http://localhost:8000/api/member/', {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Token 71c0a71dbdaf9945bd25d97ccf9802e92f98f4f6'
      })
    });
    // .pipe(map(members => members.map(member => new Member().deserialize(member))));
  }
}
