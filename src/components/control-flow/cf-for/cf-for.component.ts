import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cf-for',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cf-for.component.html',
  styleUrl: './cf-for.component.css'
})
export class CfForComponent {
  dayInput: string = '';
  nameArr: string[] = ['Shraddha', 'Anu', 'Rohit', 'Jiyansh', 'Jayant', 'aaru', 'Aamu', 'Aastha', 'Anuj', 'Tanmay'];
}
