import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgbComponent } from './pgb.component';

describe('PgbComponent', () => {
  let component: PgbComponent;
  let fixture: ComponentFixture<PgbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
