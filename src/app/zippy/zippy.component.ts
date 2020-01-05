import { Component, OnInit, Input } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input('title') title: string;
  isExpanded: boolean = true;
  onClick() {
    this.isExpanded = !this.isExpanded;
  }
}
