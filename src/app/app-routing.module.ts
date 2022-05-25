import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {ProductComponent} from "./product/product.component";
import {CartComponent} from "./cart/cart.component";


const routes: Routes = [
  {
    path: '', component: MainMenuComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: MainComponent},
      {path: 'product/:id', component: ProductComponent},
      {path: 'cart', component: CartComponent}
    ]
  },
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
