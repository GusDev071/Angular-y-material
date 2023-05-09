import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RppComponent } from './rpp.component';

describe('RppComponent', () => {
  let component: RppComponent;
  let fixture: ComponentFixture<RppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
