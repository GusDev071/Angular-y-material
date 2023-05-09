import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auto6Component } from './auto6.component';

describe('Auto6Component', () => {
  let component: Auto6Component;
  let fixture: ComponentFixture<Auto6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Auto6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Auto6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
