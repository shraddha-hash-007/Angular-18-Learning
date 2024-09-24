import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName: string = "Angular-18";
  firstName: string = "Shraddha Hadke";
  inputType: string = "radio";
  empName: string = "Jiyansh Meshram";
  signalEmail = signal("shraddha.hadke@gmail.com");
  isLoggedIn: boolean = true;

  constructor() {

  }
  public courseNameChange() {
    this.courseName = "React Course.."
  }
  public changeEmail() {
    this.signalEmail.set("shraddha.meshram@outlook.com");
  }

}
