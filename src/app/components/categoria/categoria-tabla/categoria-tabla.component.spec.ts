import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaTablaComponent } from './categoria-tabla.component';

describe('CategoriaTablaComponent', () => {
  let component: CategoriaTablaComponent;
  let fixture: ComponentFixture<CategoriaTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaTablaComponent]
    });
    fixture = TestBed.createComponent(CategoriaTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
