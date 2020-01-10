import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable()
export class GithubFollowersService extends DataService{

  constructor(http: HttpClient) { 
    super('https://api.github.com/users/achanta1502/followers' ,http);
  }
}
