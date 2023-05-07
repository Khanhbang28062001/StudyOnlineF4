import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../Service/common.service';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  public username = "";
  public password ="";
  public routeroutlet ="";
  // public sendPassCode ="send";
  // public pass = "";
  
  public formDataLogin = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    // idrole:[1]
  });
  constructor (private common: CommonService,
    private formBuilder: FormBuilder,
    private userService:UserService,
    private router : Router
   ){

   }

  ngOnInit(): void{}
  
  onSubmit( formData:FormBuilder
             ){

     console.log("send user",this.formDataLogin.value);
     if (this.formDataLogin.value.username && this.formDataLogin.value.password) {
      this.userService.CheckLogin(this.formDataLogin.value).subscribe((data) => {
        console.log('access successful', data)
        if (data.idrole == 1){
          this.router.navigate(['/home-page-st']);
        }
        if (data.idrole == 2){
          this.router.navigate(['/homepage-gv']);
        }
        if (data.idrole == 3){
          this.routeroutlet = "";
        }
      }
      );
    }
    //  this.userService.CheckLogin(this.formDataLogin.value.userName,this.formDataLogin.value.userName);
  }
//   public inputNumberPhone(){
//     console.log(this.userName);
//  }

}
