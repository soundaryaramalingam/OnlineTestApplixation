import { Component, OnInit } from '@angular/core';
import { OnlinetestService } from '../onlinetest.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent  implements OnInit {

  msg:string="";

  constructor(private questserv:OnlinetestService, private router:Router) { }

ngOnInit(): void {
  console.log("adminview ngonit");
}
taketest(){
  console.log('list question');
  this.router.navigate(['viewallquestions'])
}
}
