import { Component, OnInit, Input, Output, EventEmitter, OnChanges,OnDestroy,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit{

  @Input() public stock: Stock;
  @Output() private toggleFavorite:EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
   }

  onToggleFavorite(event){
    this.toggleFavorite.emit(this.stock);
  }

  ngOnInit(): void {
    console.log('Stock Item Component - On Init')
  }

  ngOnChanges(): void {
    console.log('Stock Item Component - On Changes - ')
  }

  ngOnDestroy(): void {
    console.log('Stock Item Component - On Destroy')
  }

  ngDoCheck(): void {
    console.log('Stock Item Component - Do Check')
  }

  ngAfterContentChecked(): void {
    console.log('Stock Item Component - After Content Checked')
  }

  ngAfterContentInit(): void {
    console.log('Stock Item Component - After Content Init')
  }

  ngAfterViewChecked(): void {
    console.log('Stock Item Component - After View Checked')
  }

  ngAfterViewInit(): void {
    console.log('Stock Item Component - After View Init')
  }

}
