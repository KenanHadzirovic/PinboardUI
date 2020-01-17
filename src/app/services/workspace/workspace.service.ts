import { Injectable, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Workspace } from 'src/app/models/workspace';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  constructor() { 
    this.createWorkspaces();
    this.createPosts();
  }

  posts: Post[];
  workspaces: Workspace[];

  @Output() postChange: EventEmitter<Post[]> = new EventEmitter();
  @Output() workspaceChange: EventEmitter<Workspace[]> = new EventEmitter();

  addPost(post: Post) {
    post.postId = this.posts.length + 1;
    post.isDeleted = false;
    this.posts.push(post);
  }

  updatePost(post: Post)
  {
    this.posts.filter(x => x.postId == post.postId)[0] = post;
  }

  public getWorkspaces = (): Workspace[] => {
    return this.workspaces;
  }

  public removePost(id: number) {
    this.posts.splice(this.posts.findIndex(x => x.postId == id), 1);
    this.postChange.emit(this.posts);
  }

  public addWorkspace(workspace: Workspace)
  {
    workspace.workspaceId = this.workspaces.length + 1;
    workspace.isDeleted = false;
    this.workspaces.push(workspace);
    this.workspaceChange.emit(this.workspaces);
  }

  public removeWorkspace(workspaceId: number) {
    this.workspaces.splice(this.workspaces.findIndex(x => x.workspaceId == workspaceId), 1);
    this.workspaceChange.emit(this.workspaces);
  }

  public savePost(post: Post)
  {
    if(!post.postId)
    {
      this.addPost(post);
    }
    else
    {
      this.updatePost(post);
    }
    this.postChange.emit(this.posts);
  }

  public createPosts()
  {
    if(!!this.posts)
    {
      return;
    }
    this.posts = [
      {postId: 1, isDeleted: false, title:"Sample Post #1", description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.", workspaceId: 1},
      {postId: 2, isDeleted: false, title:"Sample Post #2", description:"", workspaceId: 1},
      {postId: 3, isDeleted: false, title:"Sample Post #3", description:"Present project documentation on Friday", workspaceId: 1},
      {postId: 4, isDeleted: false, title:"Sample Post #4", description:"Don't forget to send homework files to the professor!", workspaceId: 1},
    ];
    this.postChange.emit(this.posts);
  }

  public createWorkspaces()
  {
    if(!!this.workspaces)
    {
      return;
    }
    this.workspaces = [
      { workspaceId: 1, ownerId: 1, name: "Kenan's thinking", description: "Kenan's own workspace", isDeleted: false },
      { workspaceId: 2, ownerId: 1, name: "School workspace", description: "Only school notes and reminders go here", isDeleted: false }
    ];
    this.workspaceChange.emit(this.workspaces);
  }
  
}
