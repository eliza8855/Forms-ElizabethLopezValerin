import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevoEstudianteComponent } from './modal-nuevo-estudiante.component';

describe('ModalNuevoEstudianteComponent', () => {
  let component: ModalNuevoEstudianteComponent;
  let fixture: ComponentFixture<ModalNuevoEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNuevoEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNuevoEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
