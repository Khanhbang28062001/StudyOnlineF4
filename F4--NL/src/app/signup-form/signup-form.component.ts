import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  public inputName="";
  public numberPhone="";
  public passCode="";

  constructor(){}
  ngOnInit(): void{}
  
  public getPassCode(){
    console.log(this.passCode);

 }
 public inputSignUp(){
  console.log(this.inputName);
   console.log(this.numberPhone);

}


}
