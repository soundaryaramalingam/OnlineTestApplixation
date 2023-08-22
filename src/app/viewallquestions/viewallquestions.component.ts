import { Component, OnInit } from '@angular/core';
import { OnlinetestService } from '../onlinetest.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-viewallquestions',
  templateUrl: './viewallquestions.component.html',
  styleUrls: ['./viewallquestions.component.css']
})
export class ViewallquestionsComponent implements OnInit{
qninfo:any;
question:string="";
option1:string="";
option2:string="";
option3:string="";
total:number=0;
p:number=1;
chk:boolean=false;
btncheck:boolean=false;
constructor(
private onlineserv:OnlinetestService,
private router:Router,
private builder:FormBuilder
){

}
  ngOnInit(): void {
    this.qninfo=this.onlineserv.viewQuestions();
  }
  viewallquestions(){
    console.log('entered view all questions');
this.qninfo=this.onlineserv.viewQuestions();
console.log(this.onlineserv.viewQuestions());
console.log(this.qninfo);
    
    this.onlineserv.viewQuestions().subscribe(data=>{
      this.qninfo=data;
    });
    
  }
  usertestform=this.builder.group({
  
 
    option:this.builder.control('',Validators.required)
  });
  
  nextbuttonaction(question:string)
{
  this.btncheck=true;
  alert('answer submitted')
  if(question=="Which One is the smallest ocean in the world" 
  && this.usertestform.controls.option.value=="Arctic")
  {
  this.total=this.total+1;
  this.btncheck=false;
  }
  else if(question=="Which Country Gifted the \"Statue Of Liberty\" to USA in 1886" 
  && this.usertestform.controls.option.value=="France"){
   this.total=this.total+1;
   this.btncheck=false;
  }
  else if(question=="In Which Ocean Bermuda Triangle Ocean Is Located" 
  && this.usertestform.controls.option.value=="Atlantic"){
   this.total=this.total+1;
   this.btncheck=true;
  }
  else{
    this.total=this.total+0;
    this.btncheck=false;
   }
   


}

submitbuttonaction()
{
  
sessionStorage.setItem('usermarks',this.total.toString());
console.log('user marks'+this.total);
this.router.navigate(['/result']);

 
}

}
