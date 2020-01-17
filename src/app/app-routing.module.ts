import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { WorkspaceComponent } from './components/private/content/workspace/workspace.component';
import { OptionsComponent } from './components/private/administration/options/options.component';
import { WorkspacePanelComponent } from './components/private/administration/workspace-panel/workspace-panel.component';

const routes: Routes = [
  { path: 'workspace/:id', component: WorkspaceComponent},
  { path: 'workspaceManagement', component: WorkspacePanelComponent},
  { path: 'login', component: LoginComponent },
  { path: 'options', component: OptionsComponent },
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
