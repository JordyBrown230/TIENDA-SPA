import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionRegistroComponent } from './direccion-registro.component';

describe('DireccionRegistroComponent', () => {
  let component: DireccionRegistroComponent;
  let fixture: ComponentFixture<DireccionRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DireccionRegistroComponent]
    });
    fixture = TestBed.createComponent(DireccionRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
