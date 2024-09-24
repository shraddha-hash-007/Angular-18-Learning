import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuableItemComponent } from './resuable-item.component';

describe('ResuableItemComponent', () => {
  let component: ResuableItemComponent;
  let fixture: ComponentFixture<ResuableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResuableItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResuableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
