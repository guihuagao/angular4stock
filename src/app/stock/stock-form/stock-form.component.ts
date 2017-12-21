import { Component, OnInit } from '@angular/core';
import {Stock, StockService} from "../stock.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock:Stock;
  constructor(private stockService:StockService,private routeInfo:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    let stockId=this.routeInfo.snapshot.params['id'];
    this.stock= this.stockService.getStock(stockId);
  }

  cancel(){
   this.router.navigateByUrl('/stock');

  }
  save(){
    console.log(this.stock.rating);
    this.router.navigateByUrl('/stock');
  }

}
