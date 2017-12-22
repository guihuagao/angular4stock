import { Injectable } from '@angular/core';
import {Observable} from "rxjs";


@Injectable()
export class WebSocketService {

  ws:WebSocket;

  constructor() { }

  /*第一种方法，可观测的流*/
  createObservableSocket(url:string): Observable<any>{
    this.ws=new WebSocket(url);
    return new Observable(
      observer=>{
        this.ws.onmessage=(event)=>observer.next(event.data);/*什么时候发射下一个元素*/
        this.ws.onerror=(event)=>observer.error(event); /*什么时候抛异常*/
        this.ws.onclose=(event)=>observer.complete();
      }
    );
  }

  /*第二种发消息*/
 /* send(message:string){
    this.ws.send(message);
  }*/

}
