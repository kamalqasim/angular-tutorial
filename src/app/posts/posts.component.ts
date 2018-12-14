import { Component, OnInit } from '@angular/core';
import {PostsModel} from '../shared/posts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  selectedPost: PostsModel;
  constructor() { }

  ngOnInit() {
  }

}
