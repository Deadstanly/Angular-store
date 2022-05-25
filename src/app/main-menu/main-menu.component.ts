import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {


  public type: string = 'Phone';

  constructor(private router: Router, private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  public setType(type: string) {
    this.type = type;

    if (this.type != 'Cart') {
      this.router.navigate(['/'], {
        queryParams: {
          type: this.type
        }
      })
      this.productService.setType(this.type)
    }
  }
}
