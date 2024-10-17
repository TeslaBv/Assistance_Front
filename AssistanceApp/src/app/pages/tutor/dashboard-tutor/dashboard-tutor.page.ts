import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { LogobarComponent } from "../../../components/logobar/logobar.component";
import { RouterLink } from '@angular/router';

interface Child {
  nombre: string;
  edad: number;
  tutor: string;
  status: string;
  image: string;
}

@Component({
  selector: 'app-dashboard-tutor',
  templateUrl: './dashboard-tutor.page.html',
  styleUrls: ['./dashboard-tutor.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardContent, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LogobarComponent, RouterLink]
})
export class DashboardTutorPage implements OnInit {
  id: number = 1;
  tutor: string = 'tutor';
  currentDate: string = ''; // Variable para la hora y fecha actual
  currentTime: string = '';

  // Arreglo de niños
  children: Child[] = [
    {
      nombre: "Azul Jackson Rivera",
      edad: 8,
      tutor: "Tutor 1",
      status: "Ingresado",
      image: "https://assets.abelandlula.com/image/upload/c_crop,x_0.35,y_0.00,w_0.30,h_0.85/t_auto_img,f_auto,c_limit,w_1920/vestidos-clp-nina-ayl-i24.jpg"
    },
    {
      nombre: "María López",
      edad: 9,
      tutor: "Tutor 2",
      status: "En espera",
      image: "https://assets.abelandlula.com/image/upload/c_crop,x_0.35,y_0.00,w_0.30,h_0.85/t_auto_img,f_auto,c_limit,w_1920/vestidos-clp-nina-ayl-i24.jpg"
    },
    {
      nombre: "Juan Pérez",
      edad: 7,
      tutor: "Tutor 3",
      status: "Ingresado",
      image: "https://assets.abelandlula.com/image/upload/c_crop,x_0.35,y_0.00,w_0.30,h_0.85/t_auto_img,f_auto,c_limit,w_1920/vestidos-clp-nina-ayl-i24.jpg"
    }
  ];

  constructor() { }

  ngOnInit() {
    // Actualizar la hora cada segundo
    setInterval(() => {
      this.currentTime = this.getCurrentTime();
      this.currentDate = this.getCurrentDate();
    }, 1000);
  }

  // Método para obtener la fecha y hora formateada
  getCurrentDate(): string {
    const now = new Date();

    // Formatear la fecha: dd/MM/yyyy
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Los meses comienzan en 0
    const year = now.getFullYear();
    const date = `${day}/${month}/${year}`;

    return `${date}`;
  }

  getCurrentTime(): string {
    const now = new Date();

    // Formatear la hora: HH:mm:ss
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`;

    return ` ${time}`;
  }
}
