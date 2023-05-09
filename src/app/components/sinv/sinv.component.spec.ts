import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinvComponent } from './sinv.component';

describe('SinvComponent', () => {
  let component: SinvComponent;
  let fixture: ComponentFixture<SinvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
