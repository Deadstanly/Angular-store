import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";
import {Product} from "../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product$;

  constructor(private productService: ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.product$ = this.router.params.pipe(
      switchMap(params => {
        return this.productService.getInfoById(params['id'])
      })
    )
  }

  public addProduct(product) {
    this.productService.cartProducts.push(product)
  }
}
