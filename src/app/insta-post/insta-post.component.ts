import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/posts.service';

@Component({
  selector: 'app-insta-post',
  templateUrl: './insta-post.component.html',
  styleUrls: ['./insta-post.component.css']
})
export class InstaPostComponent implements OnInit {
  insta: { title: string; content: string; }[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    // get the insta post from service
    this.insta = this.postService.getInstaPosts();
  }

}
