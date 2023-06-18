import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioRegistroComponent } from './envio-registro.component';

describe('EnvioRegistroComponent', () => {
  let component: EnvioRegistroComponent;
  let fixture: ComponentFixture<EnvioRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvioRegistroComponent]
    });
    fixture = TestBed.createComponent(EnvioRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
