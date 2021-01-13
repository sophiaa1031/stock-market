import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss']
})
export class CreateStockComponent {

  public stock: Stock;
  public confirmed= false;
  public exchanges =['NYSE','NASDAQ','OTHER'];

  constructor() {
    this.stock = new Stock('','',0,0,'NASDAQ');
   }

  setStockPrice(price){
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm){
    console.log('Stock Form',stockForm);
    if(stockForm.valid){
      console.log('Creating stock',this.stock);
    }else{
      console.error('Invalid state',this.stock);
    }
  }

}
