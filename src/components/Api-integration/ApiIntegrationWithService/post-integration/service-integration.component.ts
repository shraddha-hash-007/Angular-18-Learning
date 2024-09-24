import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentServiceService } from '../../../service/department-service.service';

@Component({
  selector: 'app-post-integration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './service-integration.component.html',
  styleUrl: './service-integration.component.css'
})
export class ServiceIntegrationComponent implements OnInit {
  http = inject(HttpClient);
  departmentService = inject(DepartmentServiceService);
  ngOnInit(): void {
    this.getData();
  }
  departmentData: any[] = [];
  departmentObj = {

    "departmentId": 0,
    "departmentName": '',
    "departmentLogo": ''

  }
  constructor() {


  }
  // saveData() {
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment/", this.departmentObj).subscribe((res) => {
  //     console.log(res);
  //   })
  //   console.log("save DAta");

  //   this.getData();
  // }

  saveData() {
    this.departmentService.saveData(this.departmentObj).subscribe((res) => {
      alert("Data saved successfully!!!");
    })
  }

  // getData() {
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res: any) => {
  //     console.log("result data", res);
  //     this.departmentData = res.data;
  //   })
  // }
  getData() {
    this.departmentService.getData().subscribe((res: any) => {
      this.departmentData = res.data;
    })
  }
  onEdit(data: any) {
    this.departmentObj = data;

  }
  onUpdate() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment/", this.departmentObj).subscribe((res) => {
      console.log(res);
    })
    console.log("Updated DAta");
  }
  onDelete(id: any) {
    console.log("delte item id:", id);
    const isDelete = confirm('Are you sure u want to delete');
    if (isDelete) {
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId=" + id).subscribe((res: any) => {
        if (res.result) {
          alert('department deleted successfully!!');
          this.getData();
        }
        else {
          alert(res.message);
        }
      })
    } else {

    }

  }

}
