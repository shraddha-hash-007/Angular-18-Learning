import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ResuableItemComponent } from './../../../../ReusableComponent/resuable-item/resuable-item.component';
import { GButtonComponent } from '../../../../ReusableComponent/button/gbutton/gbutton.component';

@Component({
  selector: 'app-get-integration',
  standalone: true,
  imports: [CommonModule, ResuableItemComponent, GButtonComponent],
  templateUrl: './get-integration.component.html',
  styleUrl: './get-integration.component.css'
})
export class GetIntegrationComponent {
  // http = inject(HttpClient); - Angular 16
  userData: any[] = [];
  customerData: any[] = [];
  constructor(private http: HttpClient) {
    this.getUserData();
    this.getCustomerData();

  }
  getUserData() {
    this.http.get("https://jsonplaceholder.typicode.com/users/").subscribe((res: any) => {
      this.userData = res
      console.log("result::", this.userData)
    });
  };
  getCustomerData() {
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((res: any) => {
      this.customerData = res.data;
      console.log("this.customerData", this.customerData);

    }, error => {
      console.error("some error in api");

    })
  }
}
