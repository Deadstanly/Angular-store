import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {switchMap} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  public product;
  public form: FormGroup;
  public submitted: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        return this.productService.getInfoById(params['id'])
      })
    ).subscribe(product => {
      this.product = product;
      this.form = new FormGroup({
        type: new FormControl(this.product.type, [Validators.required]),
        title: new FormControl(this.product.title, [Validators.required]),
        photo: new FormControl(this.product.photo, [Validators.required]),
        info: new FormControl(this.product.info, [Validators.required]),
        price: new FormControl(this.product.price, [Validators.required]),
      })
    })
  }

  public submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    this.productService.update({
      ...this.product,
      type: this.form.value.type,
      title: this.form.value.title,
      photo: this.form.value.photo,
      info: this.form.value.info,
      price: this.form.value.price,
    }).subscribe(res => {
      this.form.reset();
      this.submitted = false;
      this.router.navigate(['/admin', 'dashboard']).then()
    });
  }
}
