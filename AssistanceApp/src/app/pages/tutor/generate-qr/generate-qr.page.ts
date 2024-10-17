import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { QRCodeModule } from 'angularx-qrcode';
import { LogobarComponent } from "../../../components/logobar/logobar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-generate-qr',
  templateUrl: './generate-qr.page.html',
  styleUrls: ['./generate-qr.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardContent, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, QRCodeModule, LogobarComponent, RouterLink]
})
export class GenerateQRPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}