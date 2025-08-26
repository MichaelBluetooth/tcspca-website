import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherHelpComponent } from './other-help.component';

describe('OtherHelpComponent', () => {
  let component: OtherHelpComponent;
  let fixture: ComponentFixture<OtherHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherHelpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
