import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector:`app-servers`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus='No Server Created !'
  
  serverName='Server name not empty';

  constructor() {
    setTimeout(() =>{
      this.allowNewServer=true;
    },7000)
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created !!!'
  }

  onUpdateServerName(event: Event){
     this.serverName=(<HTMLInputElement>event.target).value;
     console.log(this.serverName);
  }

}
