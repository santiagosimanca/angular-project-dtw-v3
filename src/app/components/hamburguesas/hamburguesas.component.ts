import { Component, Input } from '@angular/core';

interface MenuItem {
  name: string;
  imageUrl: string;
  ingredients: string[];
  showName: boolean;
}

@Component({
  selector: 'app-hamburguesas',
  templateUrl: './hamburguesas.component.html',
  styleUrl: './hamburguesas.component.css'
})
export class HamburguesasComponent {

  propertyBinding = "blue";

  currentSlide = 0;
  
  showIngredients = false;
  showPromotions = false;


  menuItems: MenuItem[] = [
    {
      name: 'Hamburguesa de Camaron',
      imageUrl: "./assets/images/slider4.png",
      ingredients: [
        'Queso', 
        'Tomate',
        'Lechuga'
        // otros ingredientes
      ],
      showName: true
    },
    {
      name: 'Hamburguesa de Jamon',
      imageUrl: "./assets/images/slider5.png",
      ingredients: [ 
        'Frijoles',
        'Arroz',
        'Pico de gallo'
        // otros ingredientes  
      ],
      showName: true
    },
    {
      name: 'Hamburguesa de Pollo',
      imageUrl: "./assets/images/food1.png",
      ingredients: [ 
        'Frijoles',
        'Arroz',
        'Pico de gallo'
        // otros ingredientes  
      ],
      showName: true
    },
    {
      name: 'Hamburguesa al pastor',
      imageUrl: "./assets/images/slider7.png",
      ingredients: [ 
        'Frijoles',
        'Arroz',
        'Pico de gallo'
        // otros ingredientes  
      ],
      showName: true
    },
    {
      name: 'Hamburguesa Vegetarina',
      imageUrl: "./assets/images/slider8.png",
      ingredients: [ 
        'Frijoles',
        'Arroz',
        'Pico de gallo'
        // otros ingredientes  
      ],
      showName: true
    }
  ];

  toggleItemName(item: MenuItem) {
    item.showName = !item.showName;
  }

  selectedIngredients: string[] = [];
  onIngredientClick(item: MenuItem, ingredient: string) {
    if (this.selectedIngredients.includes(ingredient)) {
      this.selectedIngredients = 
        this.selectedIngredients.filter(i => i !== ingredient);
    } else {
      this.selectedIngredients.push(ingredient);
    }
  }
}
