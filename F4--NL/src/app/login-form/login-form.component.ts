import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  public passCode = "";
  public numberPhone ="";
  // public sendPassCode ="send";
  // public pass = "";
  constructor (){}

  ngOnInit(): void{}
  
  public inputPassCode(){
     console.log(this.passCode);
  }
  public inputNumberPhone(){
    console.log(this.numberPhone);
 }

}
