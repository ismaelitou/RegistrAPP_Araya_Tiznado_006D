import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarTareaPage } from './actualizar-tarea.page';

describe('ActualizarTareaPage', () => {
  let component: ActualizarTareaPage;
  let fixture: ComponentFixture<ActualizarTareaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActualizarTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
