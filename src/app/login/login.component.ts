import { Component, OnInit, VERSION } from '@angular/core';
import { OnlinetestService } from '../onlinetest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string="";
  email:string="";
  password:string="";
  allusers:any;
  msg:string="";
    constructor(private builder:FormBuilder,private userserv:OnlinetestService,private router:Router) {
 //     sessionStorage.clear();
     }
  
    ngOnInit(): void {
    
    }
  
    userform=this.builder.group({
      id:this.builder.control('',Validators.required),
      username:this.builder.control('',Validators.required),
      email:this.builder.control('',Validators.required),
      password:this.builder.control('',Validators.required)
    });
  
  userclickbutton()
  {
    
    this.userserv.getallusers().subscribe(data=>{
      this.allusers=data;
       
  
  for(var c of this.allusers)
  {
    if(this.username==c.username && this.password==c.password)
    {
      sessionStorage.setItem('idofuser',this.username);
      this.router.navigate(['/userview']);
      console.log('success login')
     this.msg="success login";
  //   this.gotouser();
    }
    else{
       this.msg="wrong user";
     //  this.userform.reset();
    }
  }
});
}
  

  
    
  
}