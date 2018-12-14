import {Component, Input, OnInit} from '@angular/core';
import {PostsModel} from '../../shared/posts.model';

@Component({
  selector: 'app-post-deatil',
  templateUrl: './post-deatil.component.html',
  styleUrls: ['./post-deatil.component.css']
})
export class PostDeatilComponent implements OnInit {
  @Input() post: PostsModel;
  constructor() { }

  ngOnInit() {
  }

}
