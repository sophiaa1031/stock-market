import { Component, OnInit } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "Sophia's stock market";

  public stockObj:Stock;

  ngOnInit(): void {
    this.stockObj = new Stock('Test Stock Company','TSC',85,80);
  }

  onToggleFavorite(stockObj:Stock){
    console.log("Favorite for Sophia's stock",stockObj,'was triggered');
    this.stockObj.favorite = !this.stockObj.favorite;
  }
}
