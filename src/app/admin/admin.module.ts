import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {AdminMenuComponent} from './admin-menu/admin-menu.component';
import {LoginComponent} from './login/login.component';
import {AddProductsComponent} from './add-products/add-products.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {OrdersComponent} from './orders/orders.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "../guards/auth.guard";
import {QuillModule} from "ngx-quill";
import {AppModule} from "../app.module";
import {SearchPipe} from "../pipes/search.pipe";



@NgModule({
  declarations: [
    AdminMenuComponent,
    LoginComponent,
    AddProductsComponent,
    DashboardComponent,
    EditPageComponent,
    OrdersComponent,
    SearchPipe
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        QuillModule.forRoot(),
        RouterModule.forChild([
            {
                path: '', component: AdminMenuComponent, children: [
                    {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
                    {path: 'login', component: LoginComponent},
                    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
                    {path: 'add', component: AddProductsComponent, canActivate: [AuthGuard]},
                    {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
                    {path: 'product/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]},
                ]
            }
        ]),
    ],
  exports: [RouterModule]
})
export class AdminModule {
}
