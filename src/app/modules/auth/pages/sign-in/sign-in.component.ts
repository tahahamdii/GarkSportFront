import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RegisterService } from '../sign-up/register.service';
import { Login } from '../login';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, NgClass, NgIf, ButtonComponent],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  userData: Login = {
    email: '',
    password: '',
  };
  private baseUrl = 'http://localhost:8080/rest/auth';

  constructor(
    private readonly _router: Router,
    private http: HttpClient
  ) {}

  onClick() {
    console.log('Button clicked');
  }

  ngOnInit(): void {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      // Redirect to dashboard or home page if logged in
      this._router.navigate(['/dashboard']); // Adjust route as needed
    }
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;
    const { email, password } = this.form.value;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this._router.navigate(['/']);
  }
  login() {
    // Make login request
    this.http.post<any>(`${this.baseUrl}/C`, this.userData).pipe(
      tap(response => {
        // Save authentication status to indicate user is logged in
        // localStorage.setItem('isLoggedIn', 'true');
        // Redirect to dashboard or home page after successful login
        
        this._router.navigate(['/dashboard']); // Adjust route as needed
      })
    ).subscribe(
      response => {
        console.log('Login successful', response);
        sessionStorage.setItem('currentUser', JSON.stringify(response));

        this.http.post<{ role: string }>('http://localhost:8080/rest/auth/user/role', { email: this.userData.email })
        .subscribe(
            response => {
                const role = response.role;
                localStorage.setItem('userRole', role);
    
                console.log('User role:', role);
                // Redirect user based on role
                    
                
            },
            error => {
                console.error('Failed to fetch user role', error);
                // Handle error fetching role (e.g., show error message)
            }
        );
        
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
  

    
  }



