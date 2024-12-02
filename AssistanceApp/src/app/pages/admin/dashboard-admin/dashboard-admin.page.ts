import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon } from '@ionic/angular/standalone';
import { LogobarComponent } from 'src/app/components/logobar/logobar.component';
import { Router, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { logIn, logOut, personAdd } from 'ionicons/icons';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.page.html',
  styleUrls: ['./dashboard-admin.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton, LogobarComponent,RouterLink]
})
export class DashboardAdminPage implements OnInit {

  admin: string = 'Admin'; // Nombre del administrador
  currentDate: string = ''; // Variable para la hora y fecha actual
  currentTime: string = '';
  constructor( private router : Router) {
    addIcons({logIn,logOut,personAdd});
   }

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

  // Método para cerrar sesión
  logout() {
    // Eliminar el token del sessionStorage
    sessionStorage.removeItem('token');

    // Redirigir al usuario a la página de inicio o login
    this.router.navigate(['/home']);
  }


}
