import { Component } from '@angular/core';

@Component({
  selector: 'app-keep-study',
  templateUrl: './keep-study.component.html',
  styleUrls: ['./keep-study.component.css']
})
export class KeepStudyComponent {
  public isAddNote: boolean = false;
  public name = "VerticalModal_closing__qkFM7";
  public TimeGhiChu = "TimeNote";
  public contentNote="";
  public NoiDungGhiChu = "Nội dung ghi chú...";
  public ButtonDisabled = "Button_disabled__1cmvp";
  public note ="";

  constructor() { }

  openNote(): void{
    this.name = "";
    this.isAddNote = !this.isAddNote;

  }
  closeNote(): void{
    this.name = "VerticalModal_closing__qkFM7";

  }

  addContent(): void {
  
      this.NoiDungGhiChu ="";
      this.unBlockAddNote( this.ButtonDisabled);
      
  }
  addNoteInTime(): void {
    this.isAddNote = !this.isAddNote;
    

  }
  closeAddNote(): void {
    this.isAddNote = !this.isAddNote;
    if (this.isAddNote === false){
      this.NoiDungGhiChu ="Nội dung ghi chú..."
    }
  
  }
  unBlockAddNote(ButtonDisabled:any){
    if (this.contentNote!=""){
      this.ButtonDisabled ="";
    }
  }
  addNote(): void{
      
    //  if (this.contentNote!="")
    // this.unBlockAddNote( this.ButtonDisabled);
     console.log(this.contentNote);
    // else{
      
    //   return;
    // }
    
  }



}
