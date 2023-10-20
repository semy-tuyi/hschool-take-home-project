import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  progressLevel = 65; 
  progressClass: string = `w-[100px] h-[100px] rounded-[50%] 
  bg-[radial-gradient(closest-side,white_80%,transparent_80%_100%),conic-gradient(blue_${this.progressLevel}%,#DADADA_0)]`;

}
