import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
    <h2>{{"Hello " + name}}</h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
  //templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  // get data from the parent component
  @Input('parentData') public name;
  // send data from child component to parent component
  @Output() public childEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit("Hey Henry");
  }

}
