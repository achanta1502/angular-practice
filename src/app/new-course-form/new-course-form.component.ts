import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent{
form = new FormGroup(
  {
    name: new FormControl(),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  }
)
// we can form builder to write ABOVE CODE MUCH CLEANER
// constructor(fb: FormBuilder) {
//   this.form = fb.group({
//     name: [''],
//     contact: fb.group({
//       email: [],
//       phone: []
//     }),
//     topics: fb.array([])
//   })
// }
addTopic(topic: HTMLInputElement) {
  (this.topics as FormArray).push(new FormControl(topic.value));
  topic.value = '';
}
removeTopic(topic: FormControl) {
  let index = this.topics.controls.indexOf(topic);
  this.topics.removeAt(index);
}
get topics() {
  return this.form.get('topics') as FormArray;
}
}
