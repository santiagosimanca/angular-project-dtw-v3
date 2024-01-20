import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navbarOpen=false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
