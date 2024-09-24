import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  loginUserData: any;
  constructor(private router: Router) {
    const loginUserData = localStorage.getItem('loginUser');
    if (loginUserData != null) {
      this.loginUserData = JSON.parse(loginUserData);
    }
  }
  // OnLogoff() {
  //   localStorage.removeItem('loginUser');
  //   this.router.navigateByUrl('login');
  // }
  OnLogoff() {
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl('login');
  }
}
