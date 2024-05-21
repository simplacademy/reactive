import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Status, statuses } from './status';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive';
  user!: User; // non-null assertion operator
  form: FormGroup = this.fb.group({
    name: ['', 
      [ Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z ]*') ]
    ],
    status: ['', Validators.required],
    gender: ['', Validators.required],
    promotions: false
  });

  statuses: Status[] = statuses;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // backend call to get logged in user details
    this.user = new User("", new Status(0, ''), '', false);
    this.form.setValue(this.user);
    this.status?.setValue('');
  }

  get name() { return this.form.get("name") }
  get status() { return this.form.get("status") }
  get gender() { return this.form.get("gender") }
  get promotions() { return this.form.get("promotions") }

  compareStatus(status1: Status, status2: Status): boolean {
    console.log(JSON.stringify(status1) + " | " + JSON.stringify(status2));
    if (status1 && status2) {
      if (status1.id == status2.id) {
        return true;
      }
    }
    return false;
  }

  submit(form: FormGroupDirective) {
    if (form.valid) {
      console.log(JSON.stringify(this.form.value));
      // include code here to send form data to backend
    }
  }
}
