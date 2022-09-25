import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgxPermissionsGuard } from 'ngx-permissions';

const routes:Routes =[
  {
    path:'home',
    pathMatch:'full',
    redirectTo:''
  },
  {
    path:'',
    data: {
      title: 'Inicio',
      breadcrumb: [
        {
          label: 'Inicio',
          url: '/'
        }
      ]
    },
    loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'account',
    loadChildren:()=>import('./account/account.module').then(m=>m.AccountModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./dashboard/category/category.module').then(m => m.CategoryModule)
  },
  {
    path: 'brands',
    loadChildren: () => import('./dashboard/brand/brand.module').then(m => m.BrandModule)
  },
  {
    path:'products',
    loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)
  },
  // {
  //   path:'brands',
  //   loadChildren:()=>import('./brands/brands.module').then(m=>m.BrandsModule)
  // },
  // {
  //   path:'checkout',
  //      data:{
  //     permissions:{
  //       except:['no-auth'],
  //       redirectTo:'/dashboard/home'
  //     }
  //   },
  //   canActivate:[NgxPermissionsGuard],
  //   loadChildren:()=>import('./checkout/checkout.module').then(m=>m.CheckoutModule)
  // },
  // {
  //   path:'cart',
  //   data: {
  //     title: 'Detalles del carrito',
  //     breadcrumb: [
  //       {
  //         label:'Inicio',
  //         url:'/dashboard/home'
  //       },
  //       {
  //         label: 'Carrito',
  //         url: '/dashboard/cart'
  //       }
  //     ],
  //     permissions:{
  //       except:['no-auth'],
  //       redirectTo:'/dashboard/home'
  //     }
  //   },
  //   canActivate:[NgxPermissionsGuard],
  //   loadChildren:()=>import('./cart-page/cart-page.module').then(m=>m.CartPageModule)
  // },

  // {
  //   path:'mobile',
  //   loadChildren:()=>import('./movil/movil.module').then(m=>m.MovilModule)
  // },
  {
    path:'**',
    redirectTo:'/',
    // pathMatch:'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ChildRoutesModule { }
