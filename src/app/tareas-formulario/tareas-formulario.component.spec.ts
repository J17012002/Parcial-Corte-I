import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasFormularioComponent } from './tareas-formulario.component';

describe('TareasFormularioComponent', () => {
  let component: TareasFormularioComponent;
  let fixture: ComponentFixture<TareasFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
