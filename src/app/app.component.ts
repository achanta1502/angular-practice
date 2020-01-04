import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }
  tweet = {
    body: "some tweet",
    isLiked: false,
    likesCount: 0
  }
  onFavoriteChanged(eventArgs) {
    console.log("change requested", eventArgs);
  }
  onClick(event) {
    console.log("number of likes", event);
  }
}
