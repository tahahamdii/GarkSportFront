import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { User } from '../user';
import { RegisterService } from './register.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [FormsModule, RouterLink, AngularSvgIconModule, ButtonComponent],
})
export class SignUpComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    role: ''
  };
  private baseUrl = 'http://localhost:8080';

  constructor(private http : HttpClient, private readonly _router: Router) {}

  ngOnInit(): void {}


  register() {
    
    this.http.post<any>(`${this.baseUrl}/register`, this.user).subscribe(
      response => {
        console.log('Registration successful', response);
        this._router.navigate(['/auth/sign-in']);
        
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
