import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonoRegistrarComponent } from './telefono-registrar.component';

describe('TelefonoRegistrarComponent', () => {
  let component: TelefonoRegistrarComponent;
  let fixture: ComponentFixture<TelefonoRegistrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelefonoRegistrarComponent]
    });
    fixture = TestBed.createComponent(TelefonoRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
