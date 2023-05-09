import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormucampoComponent } from './formucampo.component';

describe('FormucampoComponent', () => {
  let component: FormucampoComponent;
  let fixture: ComponentFixture<FormucampoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormucampoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormucampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
