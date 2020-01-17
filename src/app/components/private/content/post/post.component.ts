import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddNoteComponent } from '../modals/add-note/add-note.component';
import { WorkspaceService } from 'src/app/services/workspace/workspace.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  public content: Post;

  @Input()
  public style: any;

  constructor(private modalService: NgbModal, private workspaceService: WorkspaceService) { }

  ngOnInit() {
  }

  openEditModal() {
    const modalRef = this.modalService.open(AddNoteComponent);
    modalRef.componentInstance.post = this.content;
  }

  removePost() {
    this.workspaceService.removePost(this.content.postId);
  }
  
}
