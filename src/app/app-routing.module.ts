import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuhambComponent } from './components/menuhamb/menuhamb.component'; 

const routes: Routes = [
  
  { path: 'menuhamb', component: MenuhambComponent }, 
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
