import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnbComponent } from './snb.component';

describe('SnbComponent', () => {
  let component: SnbComponent;
  let fixture: ComponentFixture<SnbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
