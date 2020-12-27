import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  public stock: Stock;
  public stockClasses;

  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company','TSC',85,80);
    let diff = (this.stock.price/this.stock.previousPrice) -1;
    let largeChanges = Math.abs(diff) > 0.01;
    this.stockClasses ={//此对象有4个key，每一个都有真/假的value,接受不了JSON对象
      "positive": this.stock.isPositiveChange(),
      "negative": !this.stock.isPositiveChange(),
      "large-change": largeChanges,
      "small-change": !largeChanges,
    }
  }

  toggleFavorite(event){
    console.log("We are toggling the favorite state for Sophia's stock",event);
    this.stock.favorite = !this.stock.favorite;
  }

}
