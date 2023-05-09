import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tree4Component } from './tree4.component';

describe('Tree4Component', () => {
  let component: Tree4Component;
  let fixture: ComponentFixture<Tree4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tree4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tree4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
