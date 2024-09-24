import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {
  apiURL: string = "https://projectapi.gerasim.in/api/Complaint/";

  constructor(private http: HttpClient) { }

  public getData() {
    return this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment");
  }
  public saveData(saveObj: any) {
    return this.http.post(`${this.apiURL}AddNewDepartment/`, saveObj)
  }
}
