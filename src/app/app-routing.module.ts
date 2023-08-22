import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { UserviewComponent } from './userview/userview.component';
import { ViewallquestionsComponent } from './viewallquestions/viewallquestions.component';
import { ResultComponent } from './result/result.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'addQuestion',component:AddQuestionComponent},
  {path:'adminview',component:AdminviewComponent},
  {path:'userview',component:UserviewComponent},
  {path:'viewallquestions',component:ViewallquestionsComponent},
  {path:'result',component:ResultComponent},
  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
