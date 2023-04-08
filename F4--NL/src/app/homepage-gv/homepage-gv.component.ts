import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage-gv',
  templateUrl: './homepage-gv.component.html',
  styleUrls: ['./homepage-gv.component.css']
})
export class HomepageGvComponent {
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
