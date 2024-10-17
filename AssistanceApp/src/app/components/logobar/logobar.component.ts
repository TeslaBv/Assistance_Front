import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonTitle, IonMenuButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-logobar',
  standalone: true,
  templateUrl: './logobar.component.html',
  styleUrls: ['./logobar.component.scss'],
  imports: [IonIcon, IonTitle, IonButtons, IonToolbar, IonHeader, IonMenuButton]
})
export class LogobarComponent  implements OnInit {
  
  constructor() { }

  ngOnInit() {}

}
