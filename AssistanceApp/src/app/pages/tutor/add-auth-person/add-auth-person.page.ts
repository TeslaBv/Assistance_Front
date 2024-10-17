import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';
import { LogobarComponent } from "../../../components/logobar/logobar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-auth-person',
  templateUrl: './add-auth-person.page.html',
  styleUrls: ['./add-auth-person.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonLabel, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LogobarComponent]
})
export class AddAuthPersonPage implements OnInit {
  @ViewChild('nombreInput', { static: true }) nombre!: IonInput;
  @ViewChild('parentescoInput', { static: true }) parentesco!: IonInput;
  foto?: File;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  onFileSelected(event: any) {
    this.foto = event.target.files[0]; // Almacena la foto seleccionada
  }

  registrar() {
    const nombre = this.nombre.value;
    const parentesco = this.parentesco.value;
    
    console.log('Nombre:', nombre);
    console.log('Tutor:', parentesco);
    console.log('Foto',this.foto);
    
    

    this.router.navigate(['/authorized-persons']);
  }

  regresar(){
    this.router.navigate(['/authorized-persons']);
  }

}
