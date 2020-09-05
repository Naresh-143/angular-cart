import { Component, OnInit } from '@angular/core';
import { ProductService} from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private produtService: ProductService) { }

  ngOnInit(): void {
    this.produtService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

}
