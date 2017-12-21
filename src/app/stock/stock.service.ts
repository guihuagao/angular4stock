import { Injectable } from '@angular/core';

@Injectable()
export class StockService {

  constructor() { }

  private stocks:Stock[]=[
  new Stock(1,'第一只股票',1.99,3,'这是第一条股票的详情描述',['it','互联网']),
  new Stock(2,'第二只股票',3.99,4,'这是第二条股票的详情描述',['it','金融']),
  new Stock(3,'第三只股票',2.99,1.5,'这是第三条股票的详情描述',['互联网']),
  new Stock(4,'第四只股票',4.99,2,'这是第四条股票的详情描述',['金融']),
  new Stock(5,'第五只股票',5.99,4.5,'这是第五条股票的详情描述',['it']),
  new Stock(6,'第六只股票',6.99,1,'这是第六条股票的详情描述',['it','互联网']),
  new Stock(7,'第七只股票',7.99,3.5,'这是第七条股票的详情描述',['it','互联网']),
  new Stock(8,'第八只股票',8.99,4.5,'这是第八条股票的详情描述',['it','互联网'])
];

  getStocks(): Stock []{
   return this.stocks;
  }

  getStock(id:number):Stock{
    let stock=this.stocks.find(stock=>stock.id==id);
    if(!stock){
      stock=new Stock(0,'',0,0,'',[]);
    }
    return stock;
  }

}

export class Stock {
  constructor(/*声明所具有的属性*/
              public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}

