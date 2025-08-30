import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductserviceService } from '../service/productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
     // Observable is a type to handle asynchronous data streams
  products:Observable<Product[]> | any;
  message:string='';
  
  constructor(private productService:ProductserviceService,
             private router:Router ) { }

  ngOnInit():void{ //Angular life Cycle Methods ngOnInit() - Invoked when component is initialised
    this.reloadData();
  }
  reloadData(){
    this.productService.getProductList().subscribe({
      next: (data) => {
        this.products = data;  // Assign the plain data, no need for async pipe in the template
      },
      error: (err) => {
        console.error('Error fetching product list:', err.message);
      }
    });
  }

   addProduct():void{
    this.router.navigate(['/add-product/_add']);
  }

  editProduct(pid:number):void{
    this.router.navigate(['/add-product', pid]);
  }


  productDetails(pid:number):void{
    this.router.navigate(['/product-details', pid]);
  }

  deleteProduct(pid:number):void{
    this.productService.deleteProduct(pid).subscribe({
      next: () => {
        this.message = 'Product deleted successfully.';
        setTimeout(() => {
          this.message = '';
          this.reloadData();  // Refresh products list after deletion
        }, 2000);  // Clear the message after 2 seconds
      },
      error: (err) => {
        console.error('Error deleting product:', err.message);  // Handle the error
        this.message = 'Error deleting product. Please try again later.';
      }
    });
  }

}
