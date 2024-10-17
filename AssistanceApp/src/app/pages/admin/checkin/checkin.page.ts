import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router
import { ScanService } from './../../../service/scan.service';
import { StartScanOptions } from './../../../../../node_modules/@capacitor-mlkit/barcode-scanning/dist/esm/definitions.d';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel, IonButton, IonToast } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { LogobarComponent } from "../../../components/logobar/logobar.component";

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.page.html',
  styleUrls: ['./checkin.page.scss'],
  standalone: true,
  imports: [IonToast, IonButton, IonLabel, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, LogobarComponent, RouterLink]
})
export class CheckinPage implements OnInit {
  isToast = false;
  toastData: any = {};
  private ScanService = inject(ScanService);
  private router = inject(Router);  // Inyecta el Router

  constructor() { }

  ngOnInit() { }

  async scanQR() {
    console.log("Funcion de ScanQR");
    try {
      const code = await this.ScanService.startScan();
      if (!code) {
        this.isToast = true;
        this.toastData = {
          color: 'danger',
          message: 'Error al leer código QR',
        };
        return;
      }
      this.isToast = true;
      this.toastData = {
        color: 'success',
        message: 'QR valido',
      };
      console.log(code);
    } catch (e) {
      console.log(e);
    }
  }

  // Redirige a la página 'infocheckin' cuando el toast desaparezca
  onToastDismiss() {
    this.router.navigate(['/infocheckin']);
  }
}
