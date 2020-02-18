import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showAlert: boolean = false;
  username: string = "";
  password: string = "";
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.showAlert = !this.userService.login(this.username, this.password);
    if(!this.showAlert)
    {
      this.router.navigate([ '/workspace/1' ]);
    }
  }

  resetAlert()
  {
    this.showAlert = false;
  }

}
