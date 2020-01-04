import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;
  @Output('change') select = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    if(this.isActive) {
      this.likesCount = this.likesCount - 1;
    }
    if(!this.isActive) {
      this.likesCount = this.likesCount + 1;
    }
    this.isActive = !this.isActive;
    this.select.emit({value: this.likesCount});
  }
}
