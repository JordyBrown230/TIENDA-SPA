import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorActualizarComponent } from './proveedor-actualizar.component';

describe('ProveedorActualizarComponent', () => {
  let component: ProveedorActualizarComponent;
  let fixture: ComponentFixture<ProveedorActualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedorActualizarComponent]
    });
    fixture = TestBed.createComponent(ProveedorActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
