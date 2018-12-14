import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostsModel} from '../../../shared/posts.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: PostsModel;
  @Output() postSelected = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelected() {
    this.postSelected.emit();
  }
}
