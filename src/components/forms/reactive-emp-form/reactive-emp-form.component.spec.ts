import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveEmpFormComponent } from './reactive-emp-form.component';

describe('ReactiveEmpFormComponent', () => {
  let component: ReactiveEmpFormComponent;
  let fixture: ComponentFixture<ReactiveEmpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveEmpFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveEmpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
