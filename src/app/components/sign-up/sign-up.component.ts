import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user = {
    firstname:'',
    lastname: '',
    email: '',
    phonenumber: '',
    gender: '',
    country: '',
    password: '',
    confirmpassword: '',
  }

  constructor() { }

  ngOnInit() {
  }

}
