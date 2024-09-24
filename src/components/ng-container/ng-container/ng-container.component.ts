import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {
  isShowDiv: boolean = true;
  http = inject(HttpClient);
  userDetail: any[] = [];
  isApiLoaded: boolean = false;
  getMainApi() {
    this.isApiLoaded = true;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
      this.userDetail = res;
      this.isApiLoaded = false;
      console.log(this.userDetail);
    })
  }

}
