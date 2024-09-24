import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIntegrationComponent } from './get-integration.component';

describe('GetIntegrationComponent', () => {
  let component: GetIntegrationComponent;
  let fixture: ComponentFixture<GetIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetIntegrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
