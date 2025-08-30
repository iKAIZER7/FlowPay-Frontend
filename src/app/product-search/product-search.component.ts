import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductserviceService } from '../service/productservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-search',
  imports: [CommonModule,FormsModule],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css'
})
export class ProductSearchComponent {
  searchTerm: string = ''; // Holds the search input
  message: string = ''; // Holds the message for the user
  products: any[] = []; // Holds the list of products

  constructor(private productService: ProductserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  // Method to handle search
  handleSearch() {
    this.products = [];
    this.message='';
    if (this.searchTerm) {
      this.productService.searchProductByName(this.searchTerm).subscribe(
        (response: any) => {
          this.products = response; // Assuming response is a list of products
          if (this.products.length === 0) {
            this.message = 'No products found.';
          }
        },
        (error) => {
          this.message = 'Error searching for products';
          console.error('Error searching for products:', error);
        }
      );
    } else {
      this.message = 'Please enter a product name';
    }
  }
}
