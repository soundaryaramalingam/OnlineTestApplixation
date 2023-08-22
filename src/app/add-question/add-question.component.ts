import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OnlinetestService } from '../onlinetest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

msg:string="";
  constructor(
  private builder:FormBuilder,
  private onlinetestserv:OnlinetestService,
  private router:Router
){
  console.log("entered add question constructor")
}
ngOnInit(): void {
  console.log('add ngonit');
}

addquestionform=this.builder.group({

id:this.builder.control('',Validators.required),
question:this.builder.control('',Validators.required),
option1:this.builder.control('',Validators.required),
option2:this.builder.control('',Validators.required),
option3:this.builder.control('',Validators.required)
});

addquestion(){
if(this.addquestionform.valid){
  console.log("form valid");
  this.onlinetestserv.addNewQuestion(this.addquestionform.value).subscribe(data=>{
  //  alert("New question is added successfully");
    this.msg="New question is added successfully";
    this.addquestionform.reset();
  });
}
else{
//  alert("Invalid form");
  this.msg="Invalid Form";
  this.addquestionform.reset();
}
}

}
