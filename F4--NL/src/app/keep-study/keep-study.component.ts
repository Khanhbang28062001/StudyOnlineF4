import { Component } from '@angular/core';

@Component({
  selector: 'app-keep-study',
  templateUrl: './keep-study.component.html',
  styleUrls: ['./keep-study.component.css']
})
export class KeepStudyComponent {
  public isAddNote :boolean = false;
  public TimeGhiChu = "TimeGhiChu";
  constructor(){}
  addNoteInTime(): void{
    this.isAddNote = !this.isAddNote;
  }
}
