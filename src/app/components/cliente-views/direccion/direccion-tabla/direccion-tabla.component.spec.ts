import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionTablaComponent } from './direccion-tabla.component';

describe('DireccionTablaComponent', () => {
  let component: DireccionTablaComponent;
  let fixture: ComponentFixture<DireccionTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DireccionTablaComponent]
    });
    fixture = TestBed.createComponent(DireccionTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
