import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuhambComponent } from './components/menuhamb/menuhamb.component'; // Asegúrate de que la ruta de importación sea correcta

const routes: Routes = [
  // Otras rutas existentes...
  { path: 'menuhamb', component: MenuhambComponent }, // Usar 'menuhamb' en lugar de 'menu'
  // Otras rutas existentes...
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
