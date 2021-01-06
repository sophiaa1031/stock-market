import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit {
  title = "Sophia's stock market";

  public stockObj:Stock;

  ngOnInit(): void {
    this.stockObj = new Stock('Test Stock Company','TSC',85,80);
    console.log('App Component - On Init')
  }

  ngOnChanges(changes:SimpleChanges): void {
    console.log('App Component - On Changes - ',changes)
  }

  ngOnDestroy(): void {
    console.log('App Component - On Destroy')
  }

  ngDoCheck(): void {
    console.log('App Component - Do Check')
  }

  ngAfterContentChecked(): void {
    console.log('App Component - After Content Checked')
  }

  ngAfterContentInit(): void {
    console.log('App Component - After Content Init')
  }

  ngAfterViewChecked(): void {
    console.log('App Component - After View Checked')
  }

  ngAfterViewInit(): void {
    console.log('App Component - After View Init')
  }

  onToggleFavorite(stockObj:Stock){
    console.log("Favorite for Sophia's stock",stockObj,'was triggered');
    this.stockObj.favorite = !this.stockObj.favorite;
  }

}
