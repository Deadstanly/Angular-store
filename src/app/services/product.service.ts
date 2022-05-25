import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product";
import {map} from "rxjs";
import {FbResponse} from "../models/fb-response";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public type: string = 'Phone';
  public cartProducts: Product[] = [];

  constructor(private http: HttpClient) {
  }

  public addProduct(product: Product) {
    return this.http.post('https://angular-store-58f27-default-rtdb.firebaseio.com/products.json', product).pipe(
      map((res: FbResponse) => {
        return {
          ...product,
          id: res.name
        }
      })
    )
  }

  public getAllProducts() {
    return this.http.get('https://angular-store-58f27-default-rtdb.firebaseio.com/products.json')
      .pipe(map(res => {
        return Object.keys(res)
          .map(key => ({
            ...res[key],
            id: key
          }))
      }))
  }

  public getInfoById(id: string) {
    return this.http.get(`https://angular-store-58f27-default-rtdb.firebaseio.com/products/${id}.json`)
      .pipe(map(res => {
        return {...res, id }
      }))
  }

  public delete(id: string) {
    return this.http.delete(`https://angular-store-58f27-default-rtdb.firebaseio.com/products/${id}.json`)
  }

  public update(product: Product) {
    return this.http.patch(`https://angular-store-58f27-default-rtdb.firebaseio.com/products/${product.id}.json`, product)
  }

  public setType(type) {
    this.type = type;
  }

  public addProductToCart(product: Product) {
    this.cartProducts.push(product)
  }

}
