import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabiesClinicsComponent } from './rabies-clinics.component';

describe('RabiesClinicsComponent', () => {
  let component: RabiesClinicsComponent;
  let fixture: ComponentFixture<RabiesClinicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RabiesClinicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RabiesClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
