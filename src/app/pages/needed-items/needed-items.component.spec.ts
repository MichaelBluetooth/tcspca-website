import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeededItemsComponent } from './needed-items.component';

describe('NeededItemsComponent', () => {
  let component: NeededItemsComponent;
  let fixture: ComponentFixture<NeededItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeededItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeededItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
