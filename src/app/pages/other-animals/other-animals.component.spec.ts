import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAnimalsComponent } from './other-animals.component';

describe('OtherAnimalsComponent', () => {
  let component: OtherAnimalsComponent;
  let fixture: ComponentFixture<OtherAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherAnimalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
