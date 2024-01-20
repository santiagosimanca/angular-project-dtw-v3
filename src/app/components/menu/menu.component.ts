import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  imageUrl: string;
  ingredients: string[];
  showName: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {

  muestraTitulo = true
  titulo = "Componente card"
  propertyBinding = "blue";

  sendValue (info:any){
    console.log(info);
  }

  images: any[] = [
    {
      url: "./assets/img/img1.png",
      title: "Hamburguesa Clásica",
      description: 'Sumérgete en la auténtica delicia de nuestra Hamburguesa Clásica. Una jugosa y sabrosa carne de res, cocida a la perfección, se encuentra entre dos suaves bollos recién horneados. Esta hamburguesa atemporal se completa con crujientes hojas de lechuga fresca, rodajas de tomate maduro y finas láminas de cebolla, todo aderezado con nuestra deliciosa salsa especial.',
    }, 
    {
      url: "./assets/img/img2.png",
      title: "Hamburguesa Doble",
      description: 'Experimenta el doble de placer con nuestra Hamburguesa Doble, una obra maestra de sabor y generosidad. Dos jugosas y sabrosas porciones de carne de res, cocidas a la perfección, se apilan entre capas de queso derretido y bollos recién horneados. Este manjar sustancioso se complementa con una generosa porción de crujiente lechuga fresca, rodajas de tomate jugoso y una mezcla irresistible de salsas artesanales. ',
    },
      {
      url: "./assets/img/img3.png",
      title: "Hamburguesa Vegetariana",
      description: 'Descubre una experiencia culinaria vibrante y saludable con nuestra Hamburguesa Vegetariana. En lugar de carne, te deleitarás con una jugosa y sabrosa hamburguesa a base de ingredientes vegetales de alta calidad. Entre dos bollos tiernos, encontrarás una mezcla exquisita de proteínas vegetales, acompañada de frescas hojas de espinaca, rodajas de tomate maduro y láminas de aguacate cremoso.',
    },
  ];

  current = 0;

  onPrevClick() {
    const prev = this.current - 1;
    this.current = prev < 0 ? this.images.length - 1 : prev;
  }

  onNextClick() {        
    const next = this.current + 1;
    this.current = next === this.images.length ? 0 : next;
  } 


  slides = [
    {
      image: "./assets/img/img1.png",
      ingredients: ['Tomate', 'Lechuga', 'Carne', 'Pollo', 'Salsa'],
      promotions: ['2x1 Martes', 'Envío gratis en compras mayores a $100','10% de descuento en tu cumpleaños' ]  
    },
    {
      image: "./assets/img/img2.png",
      ingredients: ['Queso', 'Cebolla', 'Lechuga', 'Carne', 'Salsa'],
      promotions: ['2x1 martes y jueves', 'Envío Gratis los días lunes y  martes', 'Descuento con Check-in en Redes Sociales', ]
    },
    {
      image: "./assets/img/img3.png",
      ingredients: ['Queso', 'Cebolla', 'Lechuga', 'Tomate','Soya', 'Espinaca', 'Aguacate'],
      promotions: ['2x1 martes y jueves', 'Envío Gratis los días lunes y  martes', 'Descuentos para Grupos' ]
    }
  ];

 
  currentSlide = 0;
  
  showIngredients = false;
  showPromotions = false;


  menuItems: MenuItem[] = [
    {
      name: 'Hamburguesa Clásica',
      imageUrl: "./assets/img/food1.png",
      ingredients: [
        'Queso', 
        'Tomate',
        'Lechuga'
        // otros ingredientes
      ],
      showName: true
    },
    {
      name: 'Burrito Vegetariano',
      imageUrl: "./assets/img/food2.png",
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
      name: 'Burrito Vegetariano',
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