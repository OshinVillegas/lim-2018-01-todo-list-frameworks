import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../services/product.service';
import { NgForm } from '@angular/forms';
//clase producto
import { Product } from '../../../models/product';


//importar un servicio

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService :ProductService )  { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm()
  }

  onSubmit(productFrom:NgForm){
    this.productService.insertProduct(productFrom.value);
    this.resetForm(productFrom);
  }
resetForm(productFrom? :NgForm)
{
  if(productFrom!=null)
  productFrom.reset();
  this.productService.selectedProduct = new Product();
}
}
