import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonButton, IonToast, IonInput, IonItem, IonLabel } from '@ionic/angular/standalone';
import { LogobarComponent } from "../../../components/logobar/logobar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonInput, IonToast, IonButton, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LogobarComponent]
})
export class RegisterPage implements OnInit {
  @ViewChild('nombreInput', { static: true }) nombre!: IonInput;
  @ViewChild('tutorInput', { static: true }) tutor!: IonInput;
  @ViewChild('edadInput', { static: true }) edad!: IonInput;
  foto?: File;


  constructor(private router: Router) { }

  ngOnInit() {
  }
  onFileSelected(event: any) {
    this.foto = event.target.files[0]; // Almacena la foto seleccionada
  }

  registrar() {
    const nombre = this.nombre.value;
    const tutor = this.tutor.value;
    const edad = this.edad.value;
    
    console.log('Nombre:', nombre);
    console.log('Tutor:', tutor);
    console.log('Edad:', edad);
    console.log('Foto',this.foto);
    
    

    this.router.navigate(['/dashboardAdmin']);
  }

  regresar(){
    this.router.navigate(['/dashboardAdmin']);
  }

}
