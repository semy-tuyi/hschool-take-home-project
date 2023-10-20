import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  faUser = faUser;
}
