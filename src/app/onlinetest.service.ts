import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OnlinetestService {

  constructor(private httpclient:HttpClient) { }
  private url="http://localhost:3000/OnlineTest";
  private userurl="http://localhost:3000/user";

addNewQuestion(quest:any){
  return this.httpclient.post(this.url,quest);
}
viewQuestions():Observable<any>{
  console.log('get data questions');
  return this.httpclient.get(this.url);
}
getuserbyid(id:any)
{
  return this.httpclient.get(this.userurl+'/'+id);
}
getallusers(){
  return this.httpclient.get(this.userurl);
}
}
