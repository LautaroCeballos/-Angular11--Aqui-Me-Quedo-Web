import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueVisitarComponent } from './que-visitar.component';

describe('QueVisitarComponent', () => {
  let component: QueVisitarComponent;
  let fixture: ComponentFixture<QueVisitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueVisitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueVisitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
