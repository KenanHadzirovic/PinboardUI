import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedIn: boolean = false;
  users: User[];
  loggedUser: User;
  
  @Output() loginEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.createUsers();
   }

  logout() {
    this.loggedIn = false;
    this.loginEmitter.emit(this.loggedIn);
  }

  login(username: string, password:string): boolean {
    this.loggedUser = this.users.find(x => x.username == username && x.password == password);
    this.loggedIn = !!this.loggedUser;
    this.loginEmitter.emit(this.loggedIn);
    return this.loggedIn;
  }

  register(username: string, password: string, fullName: string, confirmpassword: string): string {
    if(password != confirmpassword)
    {
      return "Passwords must match!";
    }
    if(!username)
    {
      return "Username can't be empty!";
    }
    if(!fullName)
    {
      return "Name can't be empty!";
    }
    var user = {id: this.users.length, username: username, fullName: fullName, password: password};
    this.users.push(user);
    this.loggedUser = user;
    this.loggedIn = true;
    this.loginEmitter.emit(this.loggedIn);
    return "";
  }

  private createUsers() {
    this.users = [
      {id:1, username: "admin", password: "admin", fullName:"Administrator"}, 
      {id:2, username: "khadzirovic", password: "password", fullName:"Kenan Hadzirovic"}, 
      {id:3, username: "dljevo", password: "password", fullName:"Dzenita Ljevo"}, 
      {id:4, username: "aomerbegovic", password: "password", fullName:"Armin Omerbegovic"}, 
  ];
  }
}
