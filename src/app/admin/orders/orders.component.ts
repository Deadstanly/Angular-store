import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Order} from "../../models/order";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public orders: Order[] = [];
  public orderSub: Subscription;

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.orderSub = this.orderService.getAllOrders().subscribe(orders => this.orders = orders);

  }

  ngOnDestroy() {
    if (this.orderSub) {
      this.orderSub.unsubscribe();
    }
  }

  public delete(id: string) { //TODO сделать отпуску от всех сабов
    this.orderService.delete(id).subscribe(() => {
      this.orders = this.orders.filter(order => order.id !== id);
    })
  }

}
