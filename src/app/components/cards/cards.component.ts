import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  muestraTitulo = true
  titulo = "Componente card"
  propertyBinding = "#251f20";

  titulo1  = "Tasty & Bacon";
  titulo2 = "Ranchero BBQ Burger";
  titulo3 = "Teriyaki Twist Burger";
  titulo4 = "Bacon Slam Burger";

  Parrafo1 = true;
  Parrafo2 = true;
  Parrafo3 = true;
  Parrafo4 = true;





  sendValue (info:any){
    console.log(info);


  }
  ocultaParrafo1(){
    this.Parrafo1 = !this.Parrafo1;
  }
  ocultaParrafo2(){
    this.Parrafo2 = !this.Parrafo2;
  }
  ocultaParrafo3(){
    this.Parrafo3 = !this.Parrafo3;
  }
  ocultaParrafo4(){
    this.Parrafo4 = !this.Parrafo4;
  }
}
