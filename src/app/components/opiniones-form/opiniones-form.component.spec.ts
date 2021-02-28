import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionesFormComponent } from './opiniones-form.component';

describe('OpinionesFormComponent', () => {
  let component: OpinionesFormComponent;
  let fixture: ComponentFixture<OpinionesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinionesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
