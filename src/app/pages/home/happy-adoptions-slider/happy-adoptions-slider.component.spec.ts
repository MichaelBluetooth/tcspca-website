import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyAdoptionsSliderComponent } from './happy-adoptions-slider.component';

describe('HappyAdoptionsSliderComponent', () => {
  let component: HappyAdoptionsSliderComponent;
  let fixture: ComponentFixture<HappyAdoptionsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HappyAdoptionsSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappyAdoptionsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
