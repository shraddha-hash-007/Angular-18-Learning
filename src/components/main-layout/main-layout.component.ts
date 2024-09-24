import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  constructor(private router: Router) {

  }
  OnLogoff() {
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl('login');
  }
}
