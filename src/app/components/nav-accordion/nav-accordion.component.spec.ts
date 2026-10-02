import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAccordionComponent } from './nav-accordion.component';

describe('NavAccordionComponent', () => {
  let component: NavAccordionComponent;
  let fixture: ComponentFixture<NavAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
