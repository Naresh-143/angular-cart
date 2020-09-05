import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem } from 'src/app/models/cart-item';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { cartUrl } from 'src/app/config/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
      return this.http.get<CartItem[]>(cartUrl).pipe(
        map((result:any[]) =>{

          let cartItems: CartItem[] =[];

            for(let item of result){

              let productExist = false;
      
              for(let i in cartItems){
                  if(cartItems[i].productId === item.product.id){
                      cartItems[i].qty++
                      productExist = true;
                      break;
                  }
              }
        
              if(!productExist){
                cartItems.push(new CartItem(item.id, item.product));
              }
                            
            }
            
            return cartItems;
          })
      );
  }

  addProductToCart(product: Product):Observable<any> {
    return this.http.post<any>(cartUrl, { product });
  }
}
