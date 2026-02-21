import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, ProductsService } from '../../../services/products';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
})
export class Products implements OnInit {

  products: Product[] = [];
  productForm: FormGroup;
  showTable = true;
  isLoading = false;
  editingProductId: string | null = null;


  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {

    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      description: [''],
      image: [''],
      isActive: [true]
    });

  }

  /* ==========================
        LOAD PRODUCTS
  ========================== */
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.isLoading = true;

    this.productsService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => {
        console.error('Error loading products:', err);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  /* ==========================
        SAVE PRODUCT
  ========================== */
 onSubmit() {

  if (this.productForm.invalid) {
    this.productForm.markAllAsTouched();
    return;
  }

  const formData = this.productForm.value;

  // If editing → UPDATE
  if (this.editingProductId) {

    this.productsService.updateProduct(this.editingProductId, formData)
      .subscribe({
        next: () => {
          alert('Product Updated Successfully 🌾');
          this.loadProducts();
          this.productForm.reset();
          this.showTable=true;
        },
        error: (err) => console.error('Update failed:', err)
      });

  } else {
    // If new → CREATE
    this.productsService.createProduct(formData)
      .subscribe({
        next: () => {
          alert('Product Saved Successfully 🌾');
          this.loadProducts();
           this.productForm.reset();
          this.showTable=true;
        },
        error: (err) => console.error('Create failed:', err)
      });
  }
}


  toggleTable(status: boolean) {
    this.showTable = status;
  }
  deleteProduct(id: string) {
  if (!confirm('Are you sure you want to delete this product?')) return;

  this.productsService.deleteProduct(id).subscribe({
    next: () => {
      this.loadProducts();
    },
    error: (err) => console.error('Delete failed:', err)
  });
}
editProduct(product: Product) {

  this.editingProductId = product._id || null;

  this.productForm.patchValue({
    name: product.name,
    price: product.price,
    description: product.description,
    image: product.image,
    isActive: product.isActive
  });

  this.showTable = false; // Switch to form
}


}
