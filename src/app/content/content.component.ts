
import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import 'rxjs';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle='';
  pagedesc='';
  constructor(public router:Router) {
    router.events.filter(event=>event instanceof NavigationEnd)
      .subscribe((event:NavigationEnd)=>{
      if(event.url=='/dashboard'){
        this.pageTitle='首页';
        this.pagedesc='首页展示的内容';
      }else if(event.url.startsWith('/stock')){
        this.pageTitle='股票信息管理';
        this.pagedesc='进行股票信息的基本增删改查';
      }
      })
  }

  ngOnInit() {
  }

}
