import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tareas-formulario.component.html',
  styleUrls: ['./tareas-formulario.component.css']
})
export class TareasFormularioComponent {
  title: string = '';
  description: string = '';
  done: boolean = false;

  @Output() nuevaTarea = new EventEmitter<{ title: string, description: string, done: boolean }>();

  agregarTarea(form: NgForm) {
    if (form.valid) {
      this.nuevaTarea.emit({
        title: this.title,
        description: this.description,
        done: this.done
      });
      form.resetForm();
    }
  }
}
