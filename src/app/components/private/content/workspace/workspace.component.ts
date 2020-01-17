import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { WorkspaceService } from 'src/app/services/workspace/workspace.service';
import { Post } from 'src/app/models/post';
import { SecurityService } from 'src/app/services/security/security.service';
import { PreferencesService } from 'src/app/services/preferences/preferences.service';
import { ActivatedRoute } from '@angular/router';
import { Preference } from 'src/app/models/preference';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  posts: Post[];
  workspaceId: number;
  style: any = {};
  
  constructor(private route: ActivatedRoute,
              private userService: UserService, 
              private workspaceService: WorkspaceService, 
              private securityService: SecurityService, 
              private preferencesService: PreferencesService) { } 

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.workspaceId = params.params.id;
      this.workspaceService.createPosts();
      this.workspaceService.createWorkspaces();
      this.posts = this.workspaceService.posts.filter(x => x.workspaceId == this.workspaceId);
    });


    this.workspaceService.postChange.subscribe((posts: Post[]) => {
      this.posts = posts.filter(x => x.workspaceId == this.workspaceId);
    });

    this.preferencesService.preferenceChange.subscribe(preferences => {
      this.style = { postColor: '', fontColor: '', fontSize: ''};
      this.updateStyle(preferences);
    })

    this.updateStyle(this.preferencesService.preferences);
  }

  private updateStyle(preferences: Preference[])
  {
    this.style.postColor = preferences.find(x => x.preferenceType.name == 'Background Color').value;
    this.style.fontColor = preferences.find(x => x.preferenceType.name == 'Font Color').value;
    this.style.fontSize = preferences.find(x => x.preferenceType.name == 'Font Size').value;
  }

}
