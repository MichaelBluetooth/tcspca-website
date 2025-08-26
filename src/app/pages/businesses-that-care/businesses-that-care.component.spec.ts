import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessesThatCareComponent } from './businesses-that-care.component';

describe('BusinessesThatCareComponent', () => {
  let component: BusinessesThatCareComponent;
  let fixture: ComponentFixture<BusinessesThatCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessesThatCareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessesThatCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
