import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-emp-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-emp-form.component.html',
  styleUrl: './reactive-emp-form.component.css'
})
export class ReactiveEmpFormComponent {

  empForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl(''),
    userEmail: new FormControl('shraddha@gmail.com', [Validators.email]),
    city: new FormControl(''),
    state: new FormControl(''),
    zipCode: new FormControl(''),
    isAgreeTerm: new FormControl('')

  })
  empValue: any;
  onFormSubmit() {
    this.empValue = this.empForm.value;
  }
  resetForm() {

  }

}
