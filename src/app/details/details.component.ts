import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    'assets/products/background-1.jpg',
    'assets/products/background-2.jpg',
    'assets/products/background-3.jpg',
    'assets/products/background-4.jpg',
    'assets/products/background-5.jpg',
  ];
  mainImage = 'assets/products/background-1.jpg';
  sizes = ['XS', 'S', 'M', 'L'];
  selectedSize: string | null = null;
  quantity = 1;

  selectSize(size: string) {
    this.selectedSize = size;
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

}
