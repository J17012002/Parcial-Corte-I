import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareasFormularioComponent } from './tareas-formulario/tareas-formulario.component';
import { ListaDeTareasComponent } from './lista-de-tareas/lista-de-tareas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TareasFormularioComponent, ListaDeTareasComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestión de tareas';
  tareas: any[] = []; 

  agregarTarea(tarea: any) {
    this.tareas.push(tarea);
  }
}
