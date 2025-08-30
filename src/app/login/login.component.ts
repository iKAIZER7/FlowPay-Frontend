import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,   // ✅ make it standalone since using imports here
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { username: '', password: '' };
  errorMessage: string = '';
  successMessage: string = '';
  loading: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.loginData.username && this.loginData.password) {
      this.loading = true; // ✅ show loader
      this.errorMessage = '';
      this.successMessage = '';

      this.authService.login(this.loginData).subscribe({
        next: (response: boolean) => {
          this.loading = false;

          if (response) {
            // ✅ Start session management
            this.authService.setSession('some-auth-token', this.loginData.username);

            this.successMessage = 'Login successful! Redirecting...';
            setTimeout(() => {
              this.router.navigate(['/dashboard']); // redirect to dashboard
            }, 800);
          } else {
            this.errorMessage = 'Invalid email or password.';
          }
        },
        error: (error) => {
          this.loading = false;
          console.error('Login error', error);
          this.errorMessage = 'Something went wrong. Please try again.';
        }
      });
    } else {
      this.errorMessage = 'Please fill in all fields.';
    }
  }
}
