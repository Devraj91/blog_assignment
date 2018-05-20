import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/posts.service';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.css']
})
export class TwitterPostComponent implements OnInit {
  twitter: { title: string; content: string; }[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    // get the twitter post from service
    this.twitter = this.postService.getTwitterPosts();
  }

}
