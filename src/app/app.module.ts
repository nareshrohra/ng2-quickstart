import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component.js';
import { AppPosts } from './app.posts.js';
import { AppEditPost } from './app.editpost.js';

import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [{
  path: 'posts',
  component: AppPosts
},
{
  path: 'edit-post',
  component: AppEditPost
},{
  path: '',
  component: AppPosts
}];

@NgModule({
  imports: [BrowserModule, HttpModule,
    RouterModule.forRoot(appRoutes), ReactiveFormsModule, FormsModule],
  declarations: [AppPosts, AppEditPost, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
