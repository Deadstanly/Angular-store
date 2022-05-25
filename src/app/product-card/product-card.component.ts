import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() public product: Product;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  public addProduct(product: Product) {
    this.productService.addProductToCart(product)
  }
}
