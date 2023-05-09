import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SppComponent } from './spp.component';

describe('SppComponent', () => {
  let component: SppComponent;
  let fixture: ComponentFixture<SppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
