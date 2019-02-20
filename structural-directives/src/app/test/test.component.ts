import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

  <ng-template #thenBlock>
    <h2>Name shown</h2>
  </ng-template>

  <ng-template #elseBlock>
    <h2>hidden</h2>
  </ng-template>
  `,
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  displayName = true;
  constructor() { }

  ngOnInit() {
  }

}
