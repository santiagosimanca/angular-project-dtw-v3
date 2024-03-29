import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { HamburguesasComponent } from './components/hamburguesas/hamburguesas.component';
import { BurritoComponent } from './components/burrito/burrito.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuhambComponent } from './components/menuhamb/menuhamb.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    HamburguesasComponent,
    BurritoComponent,
    PageNotFoundComponent,
    MenuhambComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component:MenuComponent},
      {path: 'hamburguesas', component:HamburguesasComponent},
      {path: 'burrito', component:BurritoComponent},
      {path: '**', component:PageNotFoundComponent},
    ]),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
