import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj: any = {
    username: '',
    password: '',
  }
  router = inject(Router);
  onLogin() {
    if (this.userObj.username == 'admin' && this.userObj.password == 1234) {
      localStorage.setItem('loginUser', this.userObj.username);
      this.router.navigateByUrl('add-emp');
    }
    else {
      alert("kindly add correct username and password");
    }
  }
}
