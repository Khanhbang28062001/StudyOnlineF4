import { Component } from '@angular/core';


@Component({
  selector: 'app-home-page-st',
  templateUrl:'./home-page-st.component.html',
  styleUrls: ['./home-page-st.component.css']
})
export class HomePageStComponent {
  isDropDownOpen: boolean = false;
  isDropDownOpenNotification: boolean = false;
  isDropDownOpenBlog: boolean = false;
  public TenEmail = "bang";
  public Email = "bang-Email";

  constructor(){}
   
  openNavProfile(): void{
    this.isDropDownOpen = !this.isDropDownOpen;
  }
  openNavNotification(): void{
    this.isDropDownOpenNotification= !this.isDropDownOpenNotification;
  }
  openNavBlog(): void{
    this.isDropDownOpenBlog= !this.isDropDownOpenBlog;
  }

}