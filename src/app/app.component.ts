import { Component } from '@angular/core';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rForm:FormGroup;
  post:any;
  name:string= '';
  password:Text;
  email:Text;
 
  constructor(private fb:FormBuilder){
    this.rForm = fb.group({
      'name':[null,Validators.required],
      'email':[null,Validators.required],
      'validate': ''
    });
  }

addPost(post){
  this.name= post.name;
  this.email=post.email;
  this.password=post.password;

}
}