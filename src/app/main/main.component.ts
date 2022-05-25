import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public products$;

  constructor(public productService: ProductService ) { }

  ngOnInit(): void {
    this.products$ = this.productService.getAllProducts();
  }

}
