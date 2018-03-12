import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from "../services/auth.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/user';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading: Boolean = false;
  loginForm: FormGroup;

  constructor(public authService: AuthService, public router: Router, private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.loading = true;
    this.authService.login(this.loginForm.get('username').value, this.loginForm.get('password').value)
      .subscribe((user: User) => {
        this.loading = false;
        if (this.authService.isLoggedIn) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

          // Redirect the user
          this.router.navigate([redirect]);
          this.snackBar.open('Bienvenido ' + user.first_name, 'Cerrar', {duration: 3000});
        }
      }, error => {
        console.error(error);
        this.loading = false;
        if (error.status === 0) {
          this.snackBar.open('Error en el servidor, contactar con Richi', 'Cerrar', {duration: 3000});
        } else {
          this.snackBar.open('Nombre de usuario o contraseña incorrecto', 'Cerrar', {duration: 3000});
        }
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }


}
