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

@NgModule({
  declarations: [
    AppComponent,
    TypingAnimationDirective,
    McoProjectComponent,
    ImageDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [
    McoProjectService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ImageDialogComponent]
})
export class AppModule { }
