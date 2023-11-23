import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarDocentePage } from './editar-docente.page';

describe('EditarDocentePage', () => {
  let component: EditarDocentePage;
  let fixture: ComponentFixture<EditarDocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
