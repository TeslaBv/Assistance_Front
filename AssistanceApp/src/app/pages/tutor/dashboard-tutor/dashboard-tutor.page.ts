import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { LogobarComponent } from "../../../components/logobar/logobar.component";
import { RouterLink, Router } from '@angular/router';
import { TutorService } from 'src/app/service/tutor.service';
import { jwtDecode } from 'jwt-decode';


interface Child {
  nombre: string;
  fecha_nacimiento: string;
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
  estudiantes: any[] = [];
  tutorId: number | null = null;
  imagen : string = '';


  constructor(private router: Router, private tutorS: TutorService) { }

  ngOnInit() {
    // Actualizar la hora cada segundo
    setInterval(() => {
      this.currentTime = this.getCurrentTime();
      this.currentDate = this.getCurrentDate();
    }, 1000);

    const token = sessionStorage.getItem('token');

    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        console.log('Decoded Token:', decodedToken); // Para depuración
        this.tutorId = decodedToken.sub; // Asegúrate de que `id` exista en el token
        if (!this.tutorId) {
          console.error('El token no contiene un campo id válido.');
        }
        console.log(this.tutorId);
        this.tutorS.getStudentsFromTutor(this.tutorId).subscribe((resp: any) => {
          console.log(resp);
          this.estudiantes = resp;
          this.estudiantes = resp.map((student: any) => ({
            ...student,
            edad: this.calculateAge(student.fecha_nacimiento)
          }));
        });
      } catch (error) {
        console.error('Error al decodificar el token:', error);
      }
    } else {
      console.error('No se encontró un token en sessionStorage.');
    }


  }


  // Método para calcular la edad a partir de la fecha de nacimiento
  calculateAge(birthDate: string): number {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const month = today.getMonth() - birth.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }




  // Método para redirigir a la página de detalles del niño
  goToChildInfo(child: Child) {
    // Puedes pasar el nombre del niño o un id como parámetro
    this.router.navigate(['/infochild'], { queryParams: { nombre: child.nombre, edad: child.edad, tutor: child.tutor, image: child.image } });
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
