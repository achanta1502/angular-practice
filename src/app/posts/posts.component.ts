import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
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
    this.service.getAll()
      .subscribe((response: Data[]) => {
        this.posts = response;
      });
  }

  createPost(input: HTMLInputElement) {
    let post: any = {title: input.value};
    input.value = '';
    this.service.create(post)
    .subscribe((response: Data) => {
      post.id = response.id;
      this.posts.splice(0, 0, post);
      console.log(response);
    }, (error: AppError) => {
      if(error instanceof BadRequestError) 
        console.log('Bad request error');
      else throw error;
    })
  }
  updatePost(post) {

    this.service.update(post)
    .subscribe(response => {
      console.log(response);
    });
  }

  deletePost(post) {
    this.service.delete(post.id)
    .subscribe((response) => {
      console.log(response);
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, (error: AppError) => {
      if(error instanceof NotFoundError)
        alert('This post has already been deleted');
      else throw error;
    }
    );
  }
}
