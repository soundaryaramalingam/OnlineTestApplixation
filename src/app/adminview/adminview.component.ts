import { Component, OnInit } from '@angular/core';
import { OnlinetestService } from '../onlinetest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {

  msg:string="";

  constructor(private questserv:OnlinetestService, private router:Router) { }

ngOnInit(): void {
  console.log("adminview ngonit");
}

addQuestion(){
  console.log('entered adminview -  add');
  this.router.navigate(['addQuestion']);
}
listQuestion(){
  console.log('list question');
  this.router.navigate(['viewallquestions'])
}
}