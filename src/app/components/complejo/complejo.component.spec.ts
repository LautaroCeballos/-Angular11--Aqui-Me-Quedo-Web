import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplejoComponent } from './complejo.component';

describe('ComplejoComponent', () => {
  let component: ComplejoComponent;
  let fixture: ComponentFixture<ComplejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplejoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
