import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethods = [
    {id: 1, name: "phone"},
    {id: 2, name: "Email"}
  ];
  constructor() { }

  ngOnInit() {
  }
  log(x) {
    console.log(x);
  }
  submit(f) {
    console.log(f);
  }
}
