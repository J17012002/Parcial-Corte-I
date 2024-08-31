import { Routes } from '@angular/router';
import { TareasFormularioComponent } from './tareas-formulario/tareas-formulario.component';
import { ListaDeTareasComponent } from './lista-de-tareas/lista-de-tareas.component';

export const routes: Routes = [
  { path: '', component: TareasFormularioComponent },
  { path: 'lista', component: ListaDeTareasComponent }
];
