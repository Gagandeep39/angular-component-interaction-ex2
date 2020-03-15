import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  serverElements = [
    {type  : "server", name : "name1", content : "content1"},
  
    {type  : "blueprint", name : "name2", content : "content2"}];

    onAddServerAdded(serverData : {newServerName:string, newServerContent:string}) {
      this.serverElements.push({
        type: 'server',
        name: serverData.newServerName,
        content: serverData.newServerContent
      });
    }
  
    onAddBlueprintAdded(blueprintData : {newServerName:string, newServerContent:string}) {
      this.serverElements.push({
        type: 'blueprint',
        name: blueprintData.newServerName,
        content: blueprintData.newServerContent
      });
      console.log("added")
    }

    onDeleteFirst(){
      this.serverElements.splice(0, 1)
    }
}
