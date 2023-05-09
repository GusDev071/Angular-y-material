import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PganComponent } from './pgan.component';

describe('PganComponent', () => {
  let component: PganComponent;
  let fixture: ComponentFixture<PganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PganComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
