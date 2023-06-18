import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoTablaComponent } from './empleado-tabla.component';

describe('EmpleadoTablaComponent', () => {
  let component: EmpleadoTablaComponent;
  let fixture: ComponentFixture<EmpleadoTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoTablaComponent]
    });
    fixture = TestBed.createComponent(EmpleadoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
