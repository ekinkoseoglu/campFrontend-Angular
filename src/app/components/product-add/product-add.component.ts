import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ['', Validators.required],
      unitPrice: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

  add() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.add(productModel).subscribe(
        // (Next) Callback of Subscribe
        (response) => {
          this.toastrService.success('Product Has Added Successfully');
        }, // (error) (ErrorHttpResponse) Callback of Subscribe
        (errorResponse) => {
          if (errorResponse.error.ValidationErrors.length > 0) {
            for (
              let i = 0;
              i < errorResponse.error.ValidationErrors.length;
              i++
            ) {
              this.toastrService.error(
                errorResponse.error.ValidationErrors[i].ErrorMessage // HttpResponseError'un Error Object'inin ValidationErrors array propertysinin her bir "ErrorMessage" propertysinin değeri
              );
              console.log(errorResponse.error.ValidationErrors); // HttpResponseError'un Error Object'inin ValidationErrors array propertysinin değeri Log'da görünüyor
            }
          }
        }
      );
    } else {
      this.toastrService.error('Please fill your all Input');
    }
  }
}
