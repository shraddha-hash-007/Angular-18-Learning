import { DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe, AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipePipe } from '../na-pipe.pipe';

@Component({
  selector: 'app-my-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, JsonPipe, AsyncPipe, NaPipePipe, CommonModule],
  templateUrl: './my-pipe.component.html',
  styleUrl: './my-pipe.component.css'
})
export class MyPipeComponent {
  myText: string = 'My Data source';
  birthDate: Date = new Date();
  empObj: any = {
    name: "shraddha",
    age: 32,
    gender: 'female',
    hobby: 'Sketching',
    kids: 1,
    married: 'yes',
    test: ''
  }
  currentTime: Observable<Date> = new Observable<Date>;
  constructor() {
    this.currentTime = interval(1000).pipe(map(() => new Date()));
  }

}
