import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
 @Input() linkPath: string='';
 linkClass: string = " absolute text-stone-400 text-2xl font-normal font-['Poppins']";


}
