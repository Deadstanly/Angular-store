import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../models/product";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], productName: string = '') {
    if (!productName.trim()) {
      return products;
    }

    return products.filter(product => {
      return product.title.toLowerCase().includes(productName.toLowerCase())
    })
  }

}
