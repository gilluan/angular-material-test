import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foton-email',
  templateUrl: './foton-email.component.html',
  styleUrls: ['./foton-email.component.css']
})
export class FotonEmailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   model: any = { email: '' }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  errorMessageEmail() {
    if (this.model.email === '') {
      return 'Email is required!';
    } else if (!this.validateEmail(this.model.email)) {
      return 'Email is invalid!';
    } else {
      return false;
    }
  }

}
