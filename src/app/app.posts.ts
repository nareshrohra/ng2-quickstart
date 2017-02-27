import { Component } from '@angular/core';
import { PostsService, Post } from './services/posts.js';

@Component({
  moduleId: module.id,
  templateUrl: `./app.posts.html`,
  providers: [PostsService]
})
export class AppPosts {
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}