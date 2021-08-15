import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productcart',
  templateUrl: './productcart.component.html',
  styleUrls: ['./productcart.component.scss']
})
export class ProductcartComponent implements OnInit {
productList:any;
click:boolean=false;
url="https://bookcart.azurewebsites.net/Upload/"
  constructor(private product:ProductService) { }


 

  ngOnInit(): void {
    this.product.getData(). subscribe ((data:any)=>{
     this.productList=data;
     console.log(this.productList);

    })
  }

  //export class ProductcartComponent implements OnInit {
  //constructor() { }

  //@Input() mat-icon: boolean;
  //@Output() mat-iconChange = new EventEmitter<boolean>();

  //ngOnInit() {
  //}

  //public togglemat-icon() {
   // this.mat-icon = this.mat-icon;
    //this.mat-iconChange.emit(this.mat-icon);
//}

}
