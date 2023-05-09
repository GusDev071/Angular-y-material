import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auto7Component } from './auto7.component';

describe('Auto7Component', () => {
  let component: Auto7Component;
  let fixture: ComponentFixture<Auto7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Auto7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Auto7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
