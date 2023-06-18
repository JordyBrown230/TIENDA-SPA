import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProveedorComponent } from './tabla-proveedor.component';

describe('TablaProveedorComponent', () => {
  let component: TablaProveedorComponent;
  let fixture: ComponentFixture<TablaProveedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaProveedorComponent]
    });
    fixture = TestBed.createComponent(TablaProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
