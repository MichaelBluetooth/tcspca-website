import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurrenderPetComponent } from './surrender-pet.component';

describe('SurrenderPetComponent', () => {
  let component: SurrenderPetComponent;
  let fixture: ComponentFixture<SurrenderPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurrenderPetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurrenderPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
