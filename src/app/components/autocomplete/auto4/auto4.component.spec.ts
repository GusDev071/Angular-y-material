import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auto4Component } from './auto4.component';

describe('Auto4Component', () => {
  let component: Auto4Component;
  let fixture: ComponentFixture<Auto4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Auto4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Auto4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
