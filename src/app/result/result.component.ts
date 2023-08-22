import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result:string="";
marks:number;
id:string="";
  constructor(private route:Router,private builder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
   this.id=sessionStorage.getItem('idofuser');
    this.marks=parseInt(sessionStorage.getItem('usermarks'));
    console.log('marks '+this.marks)
    this.marks=(this.marks/3)*100;
    if(this.marks<30)
    {
      this.result="Fail";
    }
    else{
      this.result="Pass";
    }
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
