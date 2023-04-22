import { Component } from '@angular/core';
import { user } from './user/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '4th';
  name:string="rupam saha";
  roll:string="22";
  age:string="27";
  bool:boolean=true;
 myClick(n:any)
 {
  console.log("buttton clicked");
  console.log(this.name);
  console.log(n);
 }

 public userinfo:any = new user("A123","NSEC",8583882759);
}
