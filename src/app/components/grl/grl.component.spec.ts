import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrlComponent } from './grl.component';

describe('GrlComponent', () => {
  let component: GrlComponent;
  let fixture: ComponentFixture<GrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
