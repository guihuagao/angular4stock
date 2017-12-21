import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.css']
})
export class StartsComponent implements OnInit,OnChanges {



  @Input()
  rating:number=0;
  stars:boolean[];

   @Input()
  readonly:boolean=true;

   @Output()
   ratingChange:EventEmitter<number>=new EventEmitter();


  constructor() { }

  ngOnInit() {

  }

  /*输入属性发生变化的时候调用,在 ngOnInit 之前调用*/
  ngOnChanges(changes: SimpleChanges): void {
    this.stars=[];
    for(let i=1;i<=5;i++){
      this.stars.push( i >this.rating);
    }
  }


  clickStar(index:number){
    if(!this.readonly){
      this.rating=index+1;


      this.ratingChange.emit(this.rating);

    }

  }

}
