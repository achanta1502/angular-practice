import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs'

interface Data {
  avatar_url: any,
  login: string
  html_url: any
}

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[]
  constructor(private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
      let id = this.route.snapshot.queryParamMap;
      console.log(id);
      combineLatest([this.route.paramMap, this.route.queryParamMap])
      .subscribe(combined => {
          let id = combined[0].get('id');
          let page = combined[1].get('page');
          this.service.getAll()
        .subscribe((followers: Data[]) => this.followers = followers);
      })
  }

}
