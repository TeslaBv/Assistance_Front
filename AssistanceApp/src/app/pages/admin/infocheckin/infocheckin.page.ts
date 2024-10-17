import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { LogobarComponent } from "../../../components/logobar/logobar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-infocheckin',
  templateUrl: './infocheckin.page.html',
  styleUrls: ['./infocheckin.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardContent, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LogobarComponent]
})
export class InfocheckinPage implements OnInit {
  nombre: string = "Azul Jackson";  // Puedes cambiar los valores según tu lógica
  edad: number = 5;
  tutor: string = "James Anderson";
  autorizado: string = "James Anderson";
  image:string = "https://assets.abelandlula.com/image/upload/c_crop,x_0.35,y_0.00,w_0.30,h_0.85/t_auto_img,f_auto,c_limit,w_1920/vestidos-clp-nina-ayl-i24.jpg"

  private router = inject(Router);

  constructor() { }

  ngOnInit() {}

  irACheck() {
    this.router.navigate(['/check']);
  }

}
