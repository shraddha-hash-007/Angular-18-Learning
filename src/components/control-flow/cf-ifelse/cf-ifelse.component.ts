import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cf-ifelse',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cf-ifelse.component.html',
  styleUrl: './cf-ifelse.component.css'
})
export class CfIfelseComponent {
  isShow: boolean = true;
  isShowDiv2: boolean = true;
  genderArr: any[] = ['male', 'female', 'other'];
  selectedGender: string = '';
  showDiv() {
    this.isShow = true;
  }
  hideDiv() {
    this.isShow = false;
  }
  toggleDiv() {
    this.isShowDiv2 = !this.isShowDiv2;
  }

}
