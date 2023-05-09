import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auto5Component } from './auto5.component';

describe('Auto5Component', () => {
  let component: Auto5Component;
  let fixture: ComponentFixture<Auto5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Auto5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Auto5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
