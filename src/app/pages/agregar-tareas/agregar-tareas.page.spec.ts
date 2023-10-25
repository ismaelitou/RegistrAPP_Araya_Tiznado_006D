import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarTareasPage } from './agregar-tareas.page';

describe('AgregarTareasPage', () => {
  let component: AgregarTareasPage;
  let fixture: ComponentFixture<AgregarTareasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
