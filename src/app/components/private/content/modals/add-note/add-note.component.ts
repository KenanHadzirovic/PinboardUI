import { Component, OnInit, ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/models/post';
import { WorkspaceService } from 'src/app/services/workspace/workspace.service';
import { Workspace } from 'src/app/models/workspace';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  @Input() 
  post: Post;

  @Input()
  activeWorkspace: number;

  workspaces: Workspace[];

  constructor(public activeModal: NgbActiveModal, private workspaceService: WorkspaceService) {}

  ngOnInit() {
    this.workspaces = this.workspaceService.workspaces;
    if(!this.activeWorkspace)
    {
      this.activeWorkspace = 1;
    }
    if(!this.post)
    {
      this.post = new Post();
      this.post.workspaceId = this.activeWorkspace;
    }
  }

  public savePost(){
    if(this.post.reminderDate)
    {
      this.post.reminderDate = new Date(this.post.reminderDate.year,this.post.reminderDate.month,this.post.reminderDate.day);
    }
    this.workspaceService.savePost(this.post);
    this.activeModal.close();
  }
}
