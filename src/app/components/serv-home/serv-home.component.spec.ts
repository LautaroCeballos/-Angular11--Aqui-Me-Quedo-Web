import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServHomeComponent } from './serv-home.component';

describe('ServHomeComponent', () => {
  let component: ServHomeComponent;
  let fixture: ComponentFixture<ServHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
