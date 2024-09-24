import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfIfelseComponent } from './cf-ifelse.component';

describe('CfIfelseComponent', () => {
  let component: CfIfelseComponent;
  let fixture: ComponentFixture<CfIfelseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CfIfelseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfIfelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
