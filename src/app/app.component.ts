import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Reactive Form";
  register=new FormGroup({
    name:new FormControl("",Validators.required),
    password:new FormControl("",Validators.minLength(5)),
    email:new FormControl("",Validators.email),
  }

  );
  GetData(){
    console.log(this.register.value)
  }
  get vname(){
    return this.register.get("name");
  }
  get vemail(){
    return this.register.get("email");
  }
  get vpwd(){
    return this.register.get("password");
  }
  submitData(){
    console.log(this.register.value);
    alert("form submited successfully!!!");
  }

}
