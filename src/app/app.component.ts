import { Component } from '@angular/core';
import { userInfo } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formsTemplateDriven';
  user =  {email: '', subscription: ''};

  onSubmit(form: HTMLFormElement) {
     this.user.email = form.value.email;
     this.user.subscription = form.value.subscription;
     form.reset();
  }
}
