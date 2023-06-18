import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioActualizarComponent } from './envio-actualizar.component';

describe('EnvioActualizarComponent', () => {
  let component: EnvioActualizarComponent;
  let fixture: ComponentFixture<EnvioActualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvioActualizarComponent]
    });
    fixture = TestBed.createComponent(EnvioActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
