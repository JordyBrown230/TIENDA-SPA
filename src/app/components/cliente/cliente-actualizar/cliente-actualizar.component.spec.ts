import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteActualizarComponent } from './cliente-actualizar.component';

describe('ClienteActualizarComponent', () => {
  let component: ClienteActualizarComponent;
  let fixture: ComponentFixture<ClienteActualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteActualizarComponent]
    });
    fixture = TestBed.createComponent(ClienteActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
