import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaRegistroComponent } from './categoria-registro.component';

describe('CategoriaRegistroComponent', () => {
  let component: CategoriaRegistroComponent;
  let fixture: ComponentFixture<CategoriaRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaRegistroComponent]
    });
    fixture = TestBed.createComponent(CategoriaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
