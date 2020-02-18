import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddNoteComponent } from '../../private/content/modals/add-note/add-note.component';
import { WorkspaceService } from 'src/app/services/workspace/workspace.service';
import { Workspace } from 'src/app/models/workspace';
import { Notification } from 'src/app/models/notification';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  workspaces: Workspace[];
  notifications: Notification[];
  searchString: string;
  loggedIn: boolean;

  constructor(private userService: UserService, private router: Router, private modalService: NgbModal, private workspaceService: WorkspaceService) { 
  }

  ngOnInit() {
    this.workspaceService.workspaceChange.subscribe(workspaces => {
      this.workspaces = workspaces;
    });
    this.userService.loginEmitter.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });

    this.workspaces = this.workspaceService.workspaces;
    this.notifications = this.workspaceService.notifications;
  }

  home = () => {
    if(this.loggedIn)
    {
      this.router.navigate([ '/workspace/1' ]);
    }
    else
    {
      this.router.navigate([ '/login' ]);
    }
  }

  logout = () => {
    this.userService.logout();
    this.router.navigate([ '/login' ]);
  }

  register = () => {
    this.router.navigate([ '/register' ]);
  }
  
  login = () => {
    this.router.navigate([ '/login' ]);
  }

  search() {
    this.workspaceService.search(this.searchString);
  }

  openAddModal() {
    this.modalService.open(AddNoteComponent);
  }

  clearNotification(notificationId: number) {
    console.log(notificationId);
    console.log(this.notifications);
    const index = this.notifications.findIndex(x => x.notificationId == notificationId);
    if (index > -1) {
      this.notifications.splice(index, 1);
    }
  }
}