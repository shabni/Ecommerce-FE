import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products = [
    {
      name: '2 Piece Khaddar Suit - Printed',
      type: 'Unstitched',
      price: 1999,
      image: 'assets/products/background-1.jpg',
    },
    {
      name: '2 Piece Marina Suit - Printed',
      type: 'Unstitched',
      price: 3899,
      image: 'assets/products/background-2.jpg',
    },
    {
      name: '2 Piece Stone Suit - Printed',
      type: 'Unstitched',
      price: 3699,
      image: 'assets/products/background-3.jpg',
    },
    {
      name: '2 Piece Stone Suit - Printed',
      type: 'Unstitched',
      price: 3699,
      image: 'assets/products/background-4.jpg',
    },
    {
      name: '2 Piece Stone Suit - Printed',
      type: 'Unstitched',
      price: 3699,
      image: 'assets/products/background-5.jpg',
    },
    {
      name: '2 Piece Stone Suit - Printed',
      type: 'Unstitched',
      price: 3699,
      image: 'assets/products/background-6.jpg',
    },
    // Add more product objects as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
