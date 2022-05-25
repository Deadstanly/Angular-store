import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";
import {map} from "rxjs";
import {FbResponse} from "../models/fb-response";
import {Order} from "../models/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }


  public addOrder(order: Order) {
    return this.http.post('https://angular-store-58f27-default-rtdb.firebaseio.com/orders.json', order).pipe(
      map((res: FbResponse) => {
        return {
          ...order,
          id: res.name
        }
      })
    )
  }

  public getAllOrders() {
    return this.http.get('https://angular-store-58f27-default-rtdb.firebaseio.com/orders.json')
      .pipe(map(res => {
        return Object.keys(res)
          .map(key => ({
            ...res[key],
            id: key
          }))
      }))
  }


  public delete(id: string) {
    return this.http.delete(`https://angular-store-58f27-default-rtdb.firebaseio.com/orders/${id}.json`)
  }


}
