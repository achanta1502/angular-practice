import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = "List of Courses";
  isActive = false;
  courses;
  text = "Lorem Ipsum is simply";
  email = "xyz@gmail.com";
  constructor(service: CourseService) { 
    this.courses = service.getCourses();
  }
  onSave($event) {
    $event.stopPropagation();
    console.log("Button is clicked", $event);
  }
  onDivClick() {
    console.log("div is clicked");
  }
  onKeyUp($event) {
    console.log($event.target.value);
  }
  onKeyUpNew(e) {
    console.log(e);
  }
  onKeyUpNew1() {
    console.log(this.email);
  }
  ngOnInit() {
  }

}
