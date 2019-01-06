import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypingAnimationDirective } from './mco-directives/typing-animation.directive';
import { McoProjectComponent } from './mco-project/mco-project.component';
import { McoProjectService } from './mco-project/mco-project.service';
import { ImageDialogComponent } from './mco-dialogs/image-dialog/image-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { McoAboutMeComponent } from './mco-about-me/mco-about-me.component';
import { McoRandomStuffComponent } from './mco-random-stuff/mco-random-stuff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { McoContactMeComponent } from './mco-contact-me/mco-contact-me.component';
import { MarkdownModule} from 'ngx-markdown';
@NgModule({
  declarations: [
    AppComponent,
    TypingAnimationDirective,
    McoProjectComponent,
    ImageDialogComponent,
    McoAboutMeComponent,
    McoRandomStuffComponent,
    McoContactMeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
  ],
  providers: [
    McoProjectService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ImageDialogComponent]
})
export class AppModule { }
