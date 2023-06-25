import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionActualizarComponent } from './direccion-actualizar.component';

describe('DireccionActualizarComponent', () => {
  let component: DireccionActualizarComponent;
  let fixture: ComponentFixture<DireccionActualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DireccionActualizarComponent]
    });
    fixture = TestBed.createComponent(DireccionActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
