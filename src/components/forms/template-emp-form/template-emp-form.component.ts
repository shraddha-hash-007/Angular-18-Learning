import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-emp-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-emp-form.component.html',
  styleUrl: './template-emp-form.component.css'
})
export class TemplateEmpFormComponent {
  empFormObj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zipCode: '',
    isTermChecked: false,
  }
  formValue: any;
  public onSubmitForm() {
    this.formValue = this.empFormObj;
    console.log(this.formValue);
  }
  public resetForm() {
    this.empFormObj = {
      firstName: '',
      lastName: '',
      userName: '',
      city: '',
      state: '',
      zipCode: '',
      isTermChecked: false,
    }
  }

}
