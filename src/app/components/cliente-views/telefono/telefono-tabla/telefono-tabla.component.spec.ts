import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonoTablaComponent } from './telefono-tabla.component';

describe('TelefonoTablaComponent', () => {
  let component: TelefonoTablaComponent;
  let fixture: ComponentFixture<TelefonoTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelefonoTablaComponent]
    });
    fixture = TestBed.createComponent(TelefonoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
