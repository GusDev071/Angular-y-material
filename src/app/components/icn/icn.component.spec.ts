import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcnComponent } from './icn.component';

describe('IcnComponent', () => {
  let component: IcnComponent;
  let fixture: ComponentFixture<IcnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
