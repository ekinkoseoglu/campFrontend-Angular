import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product1: any = {
    productId: 1,
    productName: 'Glass',
    categoryId: 1,
    unitPrice: 5,
  };
  product2 = {
    productId: 2,
    productName: 'Notebook',
    categoryId: 1,
    unitPrice: 5,
  };
  product3: any = {
    productId: 3,
    productName: 'Smartphone',
    categoryId: 1,
    unitPrice: 5,
  };
  product4 = {
    productId: 4,
    productName: 'Keyboard',
    categoryId: 1,
    unitPrice: 5,
  };
  product5 = {
    productId: 5,
    productName: 'Monitor',
    categoryId: 1,
    unitPrice: 5,
  };
  product6 = {
    productId: 6,
    productName: 'Mouse',
    categoryId: 1,
    unitPrice: 5,
  };

  products = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
    this.product6,
  ];
  constructor() {}

  ngOnInit(): void {}
}
