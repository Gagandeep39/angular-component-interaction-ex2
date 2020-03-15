import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {


  //Another way o read data
  @ViewChild('serverContent')  newServerContent : ElementRef;

  // Here we ned to modify the va;ue from inside so well use EventEmitter 
  // Inside EventEMitter well specifity the type of data we have to pass
  // @Output allows s to pass data to external file
  // Allows parent compoentn to listen to data change

  // Css wil be applied to html file assocat4d to that component, it wont be appliead to child component, this is a special featre of angular
  @Output() serverCreated = new EventEmitter<{newServerName:string, newServerContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{newServerName:string, newServerContent:string}>() ;
  constructor() { }

  ngOnInit() {
  }

  //Sends data to parent element uain EMitter  
  onAddServer(localServerName : HTMLInputElement) {
    this.serverCreated.emit({newServerName: localServerName.value, newServerContent : this.newServerContent.nativeElement.value});
  }

  onAddBlueprint(localServerName : HTMLInputElement) {
    this.blueprintCreated.emit({newServerName: localServerName.value, newServerContent : this.newServerContent.nativeElement.value});
  }


}
