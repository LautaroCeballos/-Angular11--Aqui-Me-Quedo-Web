import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefGeoComponent } from './ref-geo.component';

describe('RefGeoComponent', () => {
  let component: RefGeoComponent;
  let fixture: ComponentFixture<RefGeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefGeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefGeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
