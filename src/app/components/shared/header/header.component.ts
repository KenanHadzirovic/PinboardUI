import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security/security.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddNoteComponent } from '../../private/content/modals/add-note/add-note.component';
import { WorkspaceService } from 'src/app/services/workspace/workspace.service';
import { Workspace } from 'src/app/models/workspace';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  workspaces: Workspace[];
  constructor(private securityService: SecurityService, private router: Router, private modalService: NgbModal, private workspaceService: WorkspaceService) { }

  ngOnInit() {
    this.workspaceService.workspaceChange.subscribe(workspaces => {
      this.workspaces = workspaces;
    });
    this.workspaces = this.workspaceService.workspaces;
  }

  logOut = () => {
    this.securityService.logOut();
    this.router.navigate([ '/login' ]);
  }

  openAddModal() {
    this.modalService.open(AddNoteComponent);
  }
}