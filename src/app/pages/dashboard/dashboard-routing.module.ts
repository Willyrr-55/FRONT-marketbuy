import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'category',
        loadChildren:()=>import('../dashboard/category/category.module').then(m=>m.CategoryModule)
      },
      {
        path:'brands',
        loadChildren:()=>import('../dashboard/brand/brand.module').then(m=>m.BrandModule)
      },
      {
        path:'products',
        loadChildren:()=>import('../dashboard/product/product.module').then(m=>m.ProductModule)
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
