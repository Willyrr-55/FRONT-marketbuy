import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductI } from 'src/app/interfaces/product.interface';
import { AlertsService } from 'src/app/services/alerts.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input() product:ProductI;
  @Input() wishList:Boolean = true;
  @Output() getWishList:EventEmitter<boolean>= new EventEmitter<boolean>(false);

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
    private alertsService: AlertsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addProductToWishlsit(idProduct:string){
    this.wishlistService.addProductToWishlist(idProduct)
      .subscribe({
        next:(res:any)=>{
          this.alertsService.toastMixin(res.message,'success');
      },error:(e:any)=>{
          this.alertsService.toastMixin(e.error.message,'error');
      }});
  }

  removetoToWishlist(productId:string){
    console.log(productId);
    this.wishlistService.removeToWishlist(productId)
      .subscribe({
        next:(res:any)=>{
          this.getWishList.emit(true);
          this.alertsService.toastMixin(res.message,'success');
        },error:(e:any)=>{
          console.log(e)
        }
      })
  }

  detail(_id:string){
    this.router.navigate(['/products/details/',_id])
  }


  addToCard(id: string) {

    this.cartService.AddProductToCart(id);

  }



}
