import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaParqueComponent } from './galeria-parque.component';

describe('GaleriaParqueComponent', () => {
  let component: GaleriaParqueComponent;
  let fixture: ComponentFixture<GaleriaParqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaParqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaParqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
