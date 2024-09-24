import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostIntegrationComponent } from './service-integration.component';

describe('PostIntegrationComponent', () => {
  let component: PostIntegrationComponent;
  let fixture: ComponentFixture<PostIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostIntegrationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
