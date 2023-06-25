import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonoActualizarComponent } from './telefono-actualizar.component';

describe('TelefonoActualizarComponent', () => {
  let component: TelefonoActualizarComponent;
  let fixture: ComponentFixture<TelefonoActualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelefonoActualizarComponent]
    });
    fixture = TestBed.createComponent(TelefonoActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
