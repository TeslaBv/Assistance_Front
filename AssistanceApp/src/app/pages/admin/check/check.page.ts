import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonToast, IonButton, IonCard } from '@ionic/angular/standalone';
import { LogobarComponent } from "../../../components/logobar/logobar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
  standalone: true,
  imports: [IonCard, IonButton, IonToast, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LogobarComponent, RouterLink]
})
export class CheckPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
