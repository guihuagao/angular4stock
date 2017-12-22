import { Component, OnInit } from '@angular/core';
import {WebSocketService} from "./web-socket.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  messageCount=0;

  title=environment.appTitle;

  constructor( public webSocketService:WebSocketService) {
  }

  ngOnInit() {

    this.webSocketService.createObservableSocket('ws://localhost:8081')
      .map(event=>JSON.parse(event))
      .subscribe(
        event=>this.messageCount=event.messageCount
      )

  }

}
