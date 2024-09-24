import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-event',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-event.component.html',
  styleUrl: './life-cycle-event.component.css'
})
export class LifeCycleEventComponent implements OnInit, OnDestroy, OnChanges, DoCheck, OnDestroy,
  AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit {

  ngOnInit(): void {
    console.log("***ngOnInit trigger!!");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked trigger!!");
  }
  ngAfterViewInit(): void {
    console.log("***ngAfterViewInit trigger!!");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges trigger!!");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck trigger!!");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked trigger!!");
  }
  ngOnDestroy(): void {
    console.log("**ngOnDestroy trigger!!");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit trigger!!");
  }


}
