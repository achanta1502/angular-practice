import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { isIdentifier } from '@angular/compiler';
import { BadRequestError } from '../common/bad-request-error';

interface Data {
  userId: string,
  id: string,
  title: string,
  body: string
}

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: any[];
  constructor(private service: PostService) { 
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe((response: Data[]) => {
        this.posts = response;
      }, (error: AppError) => {
        alert('An unexpected error occured.');
        console.log('unexpected error');
      });
  }

  createPost(input: HTMLInputElement) {
    let post: any = {title: input.value};
    input.value = '';
    this.service.createPost(post)
    .subscribe((response: Data) => {
      post.id = response.id;
      this.posts.splice(0, 0, post);
      console.log(response);
    }, (error: AppError) => {
      if(error instanceof BadRequestError) 
        console.log('Bad request error');
      else {
        alert('An unexpected error occured.');
        console.log('unexpected error');
      }
    })
  }
  updatePost(post) {

    this.service.updatePost(post)
    .subscribe(response => {
      console.log(response);
    });
  }

  deletePost(post) {
    this.service.deletePost(post.id)
    .subscribe((response) => {
      console.log(response);
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, (error: AppError) => {
      if(error instanceof NotFoundError)
        alert('This post has already been deleted');
      else {
        alert('An unexpected error occured.');
        console.error(error);
      }
    }
    );
  }
}
