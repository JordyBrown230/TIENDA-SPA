import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoTablaComponent } from './vehiculo-tabla.component';

describe('VehiculoTablaComponent', () => {
  let component: VehiculoTablaComponent;
  let fixture: ComponentFixture<VehiculoTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculoTablaComponent]
    });
    fixture = TestBed.createComponent(VehiculoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
