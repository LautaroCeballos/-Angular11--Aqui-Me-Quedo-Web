import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdemasComponent } from './ademas.component';

describe('AdemasComponent', () => {
  let component: AdemasComponent;
  let fixture: ComponentFixture<AdemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
