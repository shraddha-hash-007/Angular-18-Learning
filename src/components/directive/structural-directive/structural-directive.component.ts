import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  isShow: boolean = true;
  toggleShow: boolean = true;
  num1: string = '';
  num2: string = '';
  isActive: boolean = false;
  selectedCountry: string = '';
  cityArr: string[] = ['Pune', 'Bhopal', 'Bangalore', 'Trichy', 'Hyderabad'];
  empDetailObj: any = [
    { empId: 154, name: 'Shraddha', age: 32, city: 'Bhopal', state: 'Madhya Pradesh', isWorking: true },
    { empId: 111, name: 'Ananya', age: 29, city: 'AmbaNagar', state: 'Madhya Pradesh', isWorking: true },
    { empId: 888, name: 'Jiyansh', age: 2.5, city: 'Pune', state: 'Maharastra', isWorking: false }
  ]

  showDiv() {
    this.isShow = true;
  }
  hideDiv() {
    this.isShow = false;
  }

  toggleHideShow() {
    this.toggleShow = !this.toggleShow;
  }

}
