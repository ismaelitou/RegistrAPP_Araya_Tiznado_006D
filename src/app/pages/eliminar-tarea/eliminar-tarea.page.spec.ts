import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarTareaPage } from './eliminar-tarea.page';

describe('EliminarTareaPage', () => {
  let component: EliminarTareaPage;
  let fixture: ComponentFixture<EliminarTareaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EliminarTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
