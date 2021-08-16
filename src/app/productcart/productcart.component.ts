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
selected=false;
url="https://bookcart.azurewebsites.net/Upload/"
  constructor(private product:ProductService) { }


 

  ngOnInit(): void {
    this.product.getData(). subscribe ((data:any)=>{
     this.productList=data;
     console.log(this.productList);

    })
  }


toggleselected(){
  if(this.selected == false){
  this.selected = true;
  }else{
    this.selected = false; 
  }
}

}
