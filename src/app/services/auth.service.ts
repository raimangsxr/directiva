import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { map } from 'rxjs/operators';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>('http://localhost:8000/login/', {
      username: username,
      password: password
    }).pipe(
      map(user => {
        const userModel = new User().deserialize(user);
        if (userModel && userModel.getToken()) {
          localStorage.setItem('currentUser', JSON.stringify(userModel));
        }
        return userModel;
      },
        error => {
          console.error(error);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      return true;
    } else {
      return false;
    }
  }

}
