import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResuableItemComponent } from '../../../../ReusableComponent/resuable-item/resuable-item.component';
import { GButtonComponent } from '../../../../ReusableComponent/button/gbutton/gbutton.component';

@Component({
  selector: 'app-post-integration',
  standalone: true,
  imports: [FormsModule, GButtonComponent, CommonModule, ResuableItemComponent],
  templateUrl: './post-integration.component.html',
  styleUrl: './post-integration.component.css'
})
export class PostIntegrationComponent implements OnInit, OnChanges {
  alertMsg: any = '';
  http = inject(HttpClient);
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
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  saveData() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment/", this.departmentObj).subscribe((res) => {
      console.log(res);
    })
    console.log("save DAta");

    this.getData();
  }

  getData() {
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res: any) => {
      console.log("result data", res);
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
  alertMsgChange() {
    this.alertMsg = "DdData saved successfully!!"
  }

}
