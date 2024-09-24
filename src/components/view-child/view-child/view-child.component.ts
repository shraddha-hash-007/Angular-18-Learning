import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ResuableItemComponent } from '../../../ReusableComponent/resuable-item/resuable-item.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [ResuableItemComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild('userInput') userInputVal?: ElementRef;
  @ViewChild(ResuableItemComponent) testStr?: ResuableItemComponent;
  ngAfterViewInit(): void {
    console.log("userInputVal", this.userInputVal);
    const val = this.userInputVal?.nativeElement.value;
    console.log("inputVal", val);
    const otherVal = this.testStr?.dummuyTestingStr;
    console.log("otherValue from alert component we can see hrer:::", otherVal);
  }

}
