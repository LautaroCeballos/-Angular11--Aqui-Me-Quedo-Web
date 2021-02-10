import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraslasierrasComponent } from './traslasierras.component';

describe('TraslasierrasComponent', () => {
  let component: TraslasierrasComponent;
  let fixture: ComponentFixture<TraslasierrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraslasierrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraslasierrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
