import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoRegistroComponent } from './empleado-registro.component';

describe('EmpleadoRegistroComponent', () => {
  let component: EmpleadoRegistroComponent;
  let fixture: ComponentFixture<EmpleadoRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoRegistroComponent]
    });
    fixture = TestBed.createComponent(EmpleadoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
