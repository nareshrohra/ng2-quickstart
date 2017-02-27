import { Component } from '@angular/core';
import { PostsService, Post } from './services/posts.js';
import { FormBuilder, Validators, NgForm } from '@angular/forms'
import {ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: `./app.editpost.html`,
  providers: [PostsService]
})

export class AppEditPost {
  model: Post;
  constructor(private fb: FormBuilder, private postsService: PostsService, private route: ActivatedRoute) {
    let postId = route.snapshot.params["id"];
    this.model = {id: 0, title: '', body: ''};
    if(postId) {
        postsService.getPost(postId).subscribe(post => {
          this.model = post;
        });
    }
  }
  doSave() {
    console.log(this.model);
    return false;
  }
}