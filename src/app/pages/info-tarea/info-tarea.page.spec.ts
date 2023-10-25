import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoTareaPage } from './info-tarea.page';

describe('InfoTareaPage', () => {
  let component: InfoTareaPage;
  let fixture: ComponentFixture<InfoTareaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
