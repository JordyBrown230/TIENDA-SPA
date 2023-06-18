import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaActualizarComponent } from './categoria-actualizar.component';

describe('CategoriaActualizarComponent', () => {
  let component: CategoriaActualizarComponent;
  let fixture: ComponentFixture<CategoriaActualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaActualizarComponent]
    });
    fixture = TestBed.createComponent(CategoriaActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
