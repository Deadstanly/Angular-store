import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../models/product";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: Product[], type: string = '') {

    return products.filter(product => {
      return product.type === type;
    })
  }

}
