import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcacComponent } from './tcac.component';

describe('TcacComponent', () => {
  let component: TcacComponent;
  let fixture: ComponentFixture<TcacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TcacComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
