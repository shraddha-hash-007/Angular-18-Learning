import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  bgColor: string = '';
  isActive: boolean = false;
  name: string = '';
  fname: string = '';
  gender: boolean = false;
  StyleObj: any =
    {
      'background-color': 'green',
      'color': 'white',
      'width': '200',
      'height': '200',
      'border-radius': '20px',



    }

  genderArr: string[] = [
    'male', 'female', 'other'
  ];
  studentList: any = [
    { name: 'shraddha', age: 32, isStudent: false, total: 32 },
    { name: 'Ananya', age: 29, isStudent: false, total: 34 },
    { name: 'Jiyansh', age: 2, isStudent: true, total: 80 },
    { name: 'Aaru', age: 3, isStudent: true, total: 65 },
    { name: 'Rohit', age: 25, isStudent: false, total: 44 },
  ]
  constructor(private router: Router) {

  }

  redBg() {
    this.bgColor = 'bg-danger';
  }
  blueBg() {
    this.bgColor = 'bg-primary'
  }
  toggleClass() {
    this.isActive = !this.isActive;
  }
  public goToLink() {
    this.router.navigateByUrl("if-directive");
  }

}
