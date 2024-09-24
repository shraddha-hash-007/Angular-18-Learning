import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-resuable-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resuable-item.component.html',
  styleUrl: './resuable-item.component.css'
})
export class ResuableItemComponent implements OnChanges {
  @Input() alertMessage: string = '';
  @Input() alertType: string = '';
  dummuyTestingStr: string = "Hello From Alert Box";
  ngOnChanges(changes: SimpleChanges): void {
    console.log("container prev val and current val:", changes);

  }
}
