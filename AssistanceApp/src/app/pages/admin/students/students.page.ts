import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonSegment, IonSegmentButton, IonLabel } from '@ionic/angular/standalone';
import { LogobarComponent } from "../../../components/logobar/logobar.component";
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
  standalone: true,
  imports: [IonLabel, IonSegmentButton, IonSegment, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LogobarComponent]
})
export class StudentsPage implements OnInit {

  students: any[] = [];
  tutorId!: number; // Variable para guardar el ID del tutor extraído de la URL

  constructor(private router: Router, private adminS: AdminService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Extraer el ID de la URL
    this.activatedRoute.paramMap.subscribe((params:any) => {
      const id = params.get('id');
      if (id) {
        this.tutorId = +id; // Convierte el ID a número
        console.log('ID del tutor:', this.tutorId);
        this.getStudentsByTutor();
      }
    });
  }

  getStudentsByTutor() {
    // Llama al servicio con el ID del tutor
    this.adminS.getStudentsFromTutor(this.tutorId).subscribe((data: any) => {
      this.students = data;
      console.log('Estudiantes:', this.students);
    });
  }

  regresar() {
    // Lógica para regresar a la página anterior
    console.log('Regresando...');
    this.router.navigate(['/tutors']);
  }
}
