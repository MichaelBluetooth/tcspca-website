import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBoxesComponent } from './nav-boxes.component';

describe('NavBoxesComponent', () => {
  let component: NavBoxesComponent;
  let fixture: ComponentFixture<NavBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBoxesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
