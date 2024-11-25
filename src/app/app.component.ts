import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FE';

  products = [
    {
      name: '2 Piece Khaddar Suit - Printed',
      type: 'Unstitched',
      price: 1999,
      image: 'assets/products/khaddar-suit-blue.jpg',
    },
    {
      name: '2 Piece Marina Suit - Printed',
      type: 'Unstitched',
      price: 3899,
      image: 'assets/products/marina-suit-blue.jpg',
    },
    {
      name: '2 Piece Stone Suit - Printed',
      type: 'Unstitched',
      price: 3699,
      image: 'assets/products/stone-suit-pink.jpg',
    },
    // Add more product objects as needed
  ];
}
