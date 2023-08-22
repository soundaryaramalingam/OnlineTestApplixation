import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminviewComponent } from './adminview/adminview.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { UserviewComponent } from './userview/userview.component';
import { ViewallquestionsComponent } from './viewallquestions/viewallquestions.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ResultComponent } from './result/result.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminviewComponent,
    AddQuestionComponent,
    UserviewComponent,
    ViewallquestionsComponent,
    ResultComponent,
    LoginComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
