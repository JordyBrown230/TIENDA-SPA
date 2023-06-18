import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoActualizarComponent } from './empleado-actualizar.component';

describe('EmpleadoActualizarComponent', () => {
  let component: EmpleadoActualizarComponent;
  let fixture: ComponentFixture<EmpleadoActualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoActualizarComponent]
    });
    fixture = TestBed.createComponent(EmpleadoActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
