import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpayNeuterComponent } from './spay-neuter.component';

describe('SpayNeuterComponent', () => {
  let component: SpayNeuterComponent;
  let fixture: ComponentFixture<SpayNeuterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpayNeuterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpayNeuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
