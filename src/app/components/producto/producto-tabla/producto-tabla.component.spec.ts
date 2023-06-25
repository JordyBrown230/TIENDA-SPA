import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoTablaComponent } from './producto-tabla.component';

describe('ProductoTablaComponent', () => {
  let component: ProductoTablaComponent;
  let fixture: ComponentFixture<ProductoTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoTablaComponent]
    });
    fixture = TestBed.createComponent(ProductoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
