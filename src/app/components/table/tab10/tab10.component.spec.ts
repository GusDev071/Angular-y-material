import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab10Component } from './tab10.component';

describe('Tab10Component', () => {
  let component: Tab10Component;
  let fixture: ComponentFixture<Tab10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
