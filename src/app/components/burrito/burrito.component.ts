import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  imageUrl: string;
  ingredients: string[];
  showName: boolean;
}

@Component({
  selector: 'app-burrito',
  templateUrl: './burrito.component.html',
  styleUrl: './burrito.component.css'
})
export class BurritoComponent {
  propertyBinding = "blue";

  currentSlide = 0;
  
  showIngredients = false;
  showPromotions = false;


  menuItems: MenuItem[] = [
    {
      name: 'Burrito de Camaron',
      imageUrl: "./assets/images/food6.png",
      ingredients: [
        'Queso', 
        'Tomate',
        'Lechuga'
        // otros ingredientes
      ],
      showName: true
    },
    {
      name: 'Burrito de Jamon',
      imageUrl: "./assets/images/food2.png",
      ingredients: [ 
        'Frijoles',
        'Arroz',
        'Pico de gallo'
        // otros ingredientes  
      ],
      showName: true
    },
    {
      name: 'Burrito de Pollo',
      imageUrl: "./assets/img/food3.png",
      ingredients: [ 
        'Frijoles',
        'Arroz',
        'Pico de gallo'
        // otros ingredientes  
      ],
      showName: true
    },
    {
      name: 'Burrito al pastor',
      imageUrl: "./assets/img/food4.png",
      ingredients: [ 
        'Frijoles',
        'Arroz',
        'Pico de gallo'
        // otros ingredientes  
      ],
      showName: true
    },
    {
      name: 'Burrito Vegetariano',
      imageUrl: "./assets/img/food5.png",
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
