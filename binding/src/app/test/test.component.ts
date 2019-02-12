import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <input [id]="myId" type="text" value="Henry">
    <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Henry">
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Henry From BU";
  public siteUrl = window.location.href;
  public myId = "testId"
  public isDisabled = true;
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hi " + this.name;
  }

}
