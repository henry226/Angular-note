import { Component, OnInit } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = [
    {title: 'First Post', content: 'This is the first post\'s content'},
    {title: 'Second Post', content: 'This is the second post\'s content'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
