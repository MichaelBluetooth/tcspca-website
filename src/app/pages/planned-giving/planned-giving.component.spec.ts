import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedGivingComponent } from './planned-giving.component';

describe('PlannedGivingComponent', () => {
  let component: PlannedGivingComponent;
  let fixture: ComponentFixture<PlannedGivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannedGivingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannedGivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
