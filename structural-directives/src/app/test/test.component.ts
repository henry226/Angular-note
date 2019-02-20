import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div *ngFor="let color of colors; index as i">
      <h2>{{i+1}} {{color}}</h2>
    </div>

    <div *ngFor="let color of colors; last as l; first as f">
      <h2>first:{{f}} last:{{l}}</h2>
      <h2>{{color}}</h2>
    </div>
  `,
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public colors = ["red", "blue", "green", "yellow"];
  constructor() { }

  ngOnInit() {
  }

}
