import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-gbutton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gbutton.component.html',
  styleUrl: './gbutton.component.css'
})
export class GButtonComponent implements OnChanges {
  @Input() btnText: string = '';
  @Input() btnClass: string = '';
  @Output() btnClick = new EventEmitter<any>();
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges..");
  }
  onClick() {
    this.btnClick.emit();
  }

}
