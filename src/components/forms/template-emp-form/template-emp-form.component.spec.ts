import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEmpFormComponent } from './template-emp-form.component';

describe('TemplateEmpFormComponent', () => {
  let component: TemplateEmpFormComponent;
  let fixture: ComponentFixture<TemplateEmpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateEmpFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateEmpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
