import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [
    ProductsComponent,
    DetailProductComponent,
    ProductListComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    NgSelectModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class ProductsModule { }
