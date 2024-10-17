import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonButton, IonToast } from '@ionic/angular/standalone';
import { ScanService } from 'src/app/service/scan.service';
import { LogobarComponent } from "../../../components/logobar/logobar.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: true,
  imports: [IonToast, IonButton, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LogobarComponent, RouterLink]
})
export class CheckoutPage implements OnInit {
  isToast = false;
  toastData:any = {}
  private ScanService = inject(ScanService);
  constructor(private router : Router) { }

  ngOnInit() {}

  async scanQR(){
    console.log("Funcion de ScanQR");
    try{
      const code = await this.ScanService.startScan();
      if(!code){
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
    }catch(e){
      console.log(e);
    }
  }

  onToastDismiss() {
    this.router.navigate(['/infocheckin']);
  }
}
