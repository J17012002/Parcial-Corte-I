import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-de-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-de-tareas.component.html',
  styleUrls: ['./lista-de-tareas.component.css']
})
export class ListaDeTareasComponent {
  @Input() tareas: any[] = [];

  marcarComoCompletada(tarea: any) {
    tarea.done = true;

  }
}
