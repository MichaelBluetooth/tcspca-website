import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHoursPanelComponent } from './mobile-hours-panel.component';

describe('MobileHoursPanelComponent', () => {
  let component: MobileHoursPanelComponent;
  let fixture: ComponentFixture<MobileHoursPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileHoursPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileHoursPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
