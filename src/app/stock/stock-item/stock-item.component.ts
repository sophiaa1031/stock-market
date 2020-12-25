import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  public name!: string; //非空断言,属性后加“ ！”;可选属性,属性后加“ ? ”
  public code!: string;
  public price!: number;
  public previousPrice!: number;
  public positiveChange!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = this.price>=this.previousPrice;
  }

}
