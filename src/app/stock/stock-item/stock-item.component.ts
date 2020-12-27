import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  public stock: Stock;
  public stockStyles;

  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company','TSC',85,80);
    let diff = (this.stock.price/this.stock.previousPrice) -1;
  }

  toggleFavorite(event){
    console.log("We are toggling the favorite state for Sophia's stock",event);
    this.stock.favorite = !this.stock.favorite;
  }

}
