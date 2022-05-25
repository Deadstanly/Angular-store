import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private productService: ProductService) {
  }

  public products: Product[] = [];
  public productSub: Subscription;
  public productName: string;

  ngOnInit(): void {
    this.productSub = this.productService.getAllProducts().subscribe(products => this.products = products);

  }

  ngOnDestroy() {
    if (this.productSub) {
      this.productSub.unsubscribe();
    }
  }

  public delete(id: string) { //TODO сделать отпуску от всех сабов
    this.productService.delete(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
    })
  }
}
