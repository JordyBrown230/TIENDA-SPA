import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoActualizarComponent } from './vehiculo-actualizar.component';

describe('VehiculoActualizarComponent', () => {
  let component: VehiculoActualizarComponent;
  let fixture: ComponentFixture<VehiculoActualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculoActualizarComponent]
    });
    fixture = TestBed.createComponent(VehiculoActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
