import { AdminService } from 'src/app/service/admin.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonSegment, IonSegmentButton, IonLabel, IonItem, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { LogobarComponent } from "../../../components/logobar/logobar.component";

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.page.html',
  styleUrls: ['./tutors.page.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonLabel, IonSegmentButton, IonSegment, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LogobarComponent]
})
export class TutorsPage implements OnInit {
  tutores : any[] = [];
  constructor(private adminS : AdminService, private router : Router) { }

  ngOnInit() {
    this.adminS.getTutors().subscribe((data:any) => {
      console.log(data);
      this.tutores = data;
    });
  }

  addStudent(idTutor: number) {
    this.router.navigate([`/student-register/${idTutor}`]);  // Navegar con el id_tutor
  }

  viewStudents(id_tutor: number) {
    // Redirigir a la página de estudiantes asignados con el id del tutor
    this.router.navigate([`/students/${id_tutor}`]);
  }
  

  regresar() {
    this.router.navigate(['/dashboardAdmin']);
  }

}
