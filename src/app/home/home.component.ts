import { Component } from '@angular/core';
import { ProductComponent } from '../components/product/product.component';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../../type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productService: ProductsService) {}
  products: Product[] = [];
  onProductOutput(product: Product) {
    console.log(product, 'output');
  }
  ngOnInit(): void {
    this.productService
      .getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 })
      .subscribe((products: Products) => {
        this.products = products.items;
        // console.log(products.items);
      });
  }
}
