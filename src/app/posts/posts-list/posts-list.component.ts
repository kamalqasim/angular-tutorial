import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PostsModel} from '../../shared/posts.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  constructor() {
  }

  @Output() postWasSelected = new EventEmitter<PostsModel>();
  posts: PostsModel[] = [
    new PostsModel('yeni xeber', 'jnadjdna dsa dasda d asfafaf af as fas da  da d sad ad as dsa das d asd',
      'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201809/RTR4TKZB_FB_5.jpeg'),
    new PostsModel('ikinci  xeber', 'jnadjdna dsa dasda d asfafaf af as fas da  da d sad ad as dsa das d asd',
      'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201809/RTR4TKZB_FB_5.jpeg'),
  ];

  ngOnInit() {
  }

  onPostSelected(post) {
    this.postWasSelected.emit(post);
  }

}
