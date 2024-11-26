import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products = [
    {
      id:'1',
      name: '2 Piece Khaddar Suit - Printed',
      type: 'Unstitched',
      price: 1999,
      image: 'assets/products/background-1.jpg',
    },
    {
      id:'2',
      name: '2 Piece Marina Suit - Printed',
      type: 'Unstitched',
      price: 3899,
      image: 'assets/products/background-2.jpg',
    },
    {
      id:'3',
      name: '2 Piece Stone Suit - Printed',
      type: 'Unstitched',
      price: 3699,
      image: 'assets/products/background-3.jpg',
    },
    {
      id:'4',
      name: '2 Piece Stone Suit - Printed',
      type: 'Unstitched',
      price: 3699,
      image: 'assets/products/background-4.jpg',
    },
    {
      id:'5',
      name: '2 Piece Stone Suit - Printed',
      type: 'Unstitched',
      price: 3699,
      image: 'assets/products/background-5.jpg',
    },
    {
      id:'6',
      name: '2 Piece Stone Suit - Printed',
      type: 'Unstitched',
      price: 3699,
      image: 'assets/products/background-6.jpg',
    },
    // Add more product objects as needed
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProductDetail(id: string) {
    this.router.navigate(['/product', id]);
  }

}
