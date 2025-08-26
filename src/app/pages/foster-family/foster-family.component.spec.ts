import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FosterFamilyComponent } from './foster-family.component';

describe('FosterFamilyComponent', () => {
  let component: FosterFamilyComponent;
  let fixture: ComponentFixture<FosterFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FosterFamilyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FosterFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
