import { Component } from '@angular/core';
import  {  faUser  }  from  '@fortawesome/free-solid-svg-icons' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend-Cliente';
  faUser=faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
