import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  ContentChild
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  serverElements = [];
  newServerName = "";
  newServerContent = "";

  // To use a different propert aname, we can specifiy the name as param in in @input('lol')
  // @input is used to get data
  // Makes propert bindable from outside (parrent)
  @Input()
  element: {
    type: string;
    name: string;
    content: string;
  };
  @ViewChild("heading") header: ElementRef;
  //To readparents content
  @ContentChild("parentParagraph") paragraph : ElementRef;

  constructor() {}
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("On Change")
  }
  ngDoCheck(): void {
    console.log("ng Do Check");
  }
  ngAfterContentInit(): void {
    console.log("ngOn Cntenet Init");
    console.log(this.header.nativeElement.textContent); //Stil empty
    console.log( "Paragraph: " + this.paragraph.nativeElement.textContent); //Stil empty
  }
  ngAfterContentChecked(): void {
    console.log("ngOnContent Checked");
  }
  ngAfterViewInit(): void {
    console.log("ngOn  View Init");
    console.log(this.header.nativeElement.textContent); //Here the data will be displayed 
  }
  ngAfterViewChecked(): void {
    console.log("ngOn Viwe Cheked");
  }
  ngOnDestroy(): void {
    console.log("ngOn Destroy");
  }

  ngOnInit() {
    console.log("ng OnInit");
    console.log(this.header.nativeElement.textContent); //Will not work as elements are not initialized
  }
}
