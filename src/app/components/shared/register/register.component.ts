import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showAlert: boolean = false;
  username: string = "";
  fullname: string = "";
  password: string = "";
  confirmpassword: string = "";
  alert: string = "";
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.alert = this.userService.register(this.username, this.password, this.fullname, this.confirmpassword);
    this.showAlert = !!this.alert;
    if(!this.showAlert)
    {
      this.router.navigate([ '/workspace/1' ]);
    }
  }

  resetAlert()
  {
    this.showAlert = false;
    this.alert = "";
  }

  disableRegisterButton() {
    return !this.username || !this.fullname || !this.password || !this.confirmpassword;
  }

}
