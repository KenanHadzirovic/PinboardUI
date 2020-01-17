import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkspaceComponent } from './components/private/content/workspace/workspace.component';
import { OptionsComponent } from './components/private/administration/options/options.component';
import { LoginComponent } from './components/shared/login/login.component';
import { PostComponent } from './components/private/content/post/post.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { AddNoteComponent } from './components/private/content/modals/add-note/add-note.component';
import { OptionComponent } from './components/private/administration/options/option/option.component';
import { WorkspacePanelComponent } from './components/private/administration/workspace-panel/workspace-panel.component';
import { LoginValidationComponent } from './components/private/content/modals/login-validation/login-validation.component';
import { InfoComponent } from './components/private/content/workspace/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    OptionsComponent,
    LoginComponent,
    PostComponent,
    HeaderComponent,
    AddNoteComponent,
    OptionComponent,
    WorkspacePanelComponent,
    LoginValidationComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    AddNoteComponent
  ],
  providers: [
    NgbActiveModal
  ],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
