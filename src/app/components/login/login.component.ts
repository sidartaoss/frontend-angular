import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-container">
      <form (ngSubmit)="onLogin()" #loginForm="ngForm" class="login-form">
        <mat-form-field class="full-width">
          <mat-label>Username</mat-label>
          <input matInput [(ngModel)]="username" name="username" required />
        </mat-form-field>
        <mat-form-field class="full-width">
          <mat-label>Password</mat-label>
          <input matInput [(ngModel)]="password" name="password" type="password" required />
        </mat-form-field>
        <button mat-raised-button color="primary" type="submit" [disabled]="!loginForm.form.valid">Login</button>
      </form>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .login-form {
      display: flex;
      flex-direction: column;
      width: 300px;
    }
    .full-width {
      width: 100%;
    }
    button {
      margin-top: 20px;
    }
  `]
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  onLogin() {
    if (this.username && this.password) {
      this.authService.login(this.username, this.password).subscribe(
        response => {
          this.authService.storeToken(response.token);
          this.router.navigate(['/categorias']);
        },
        error => {
          this.snackBar.open('Usuário ou senha inválidos', 'Fechar', {
            duration: 3000
          });
        }
      );
    }
  }
}