import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetFinderBannerComponent } from './pet-finder-banner.component';

describe('PetFinderBannerComponent', () => {
  let component: PetFinderBannerComponent;
  let fixture: ComponentFixture<PetFinderBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetFinderBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetFinderBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
