import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../models/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../services/order.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartProducts: Product[] = [];
  public total: number = 0;
  public form: FormGroup;
  public success: string = '';

  constructor(private productService: ProductService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      payment: new FormControl("Cash")
    })
    this.cartProducts = this.productService.cartProducts;
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.total += +this.cartProducts[i].price;
    }
  }

  public submit() {
    if (this.form.invalid) {
      return;
    }

    const order = {
      orders: this.cartProducts,
      name: this.form.value.name,
      phone: this.form.value.phone,
      address: this.form.value.address,
      payment: this.form.value.payment,
    }

    this.orderService.addOrder(order).subscribe(res => {
      this.form.reset();
    });

    this.success = 'Order successfully completed!!!'
  }

  public delete(product: Product) {
    this.total -= +product.price;
    this.cartProducts.splice(this.cartProducts.indexOf(product, 1))
  }
}
