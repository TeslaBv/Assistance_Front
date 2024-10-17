import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { LogobarComponent } from "../../../components/logobar/logobar.component";

interface Child {
  nombre: string;
  edad: number;
  tutor: string;
  status: string;
  image: string;
}

@Component({
  selector: 'app-info-child',
  templateUrl: './info-child.page.html',
  styleUrls: ['./info-child.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardContent, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, LogobarComponent]
})
export class InfoChildPage implements OnInit {
  child: Child = {
    nombre: '',
    edad: 0,
    tutor: '',
    status: '',
    image: ''
  };

  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    // Recuperar los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.child.nombre = params['nombre'];
      this.child.edad = params['edad'];
      this.child.tutor = params['tutor'];
      this.child.status = params['status'];
      this.child.image = params['image'];
    });
  }

  goToAuthorizedPersons() {
    // Redirigir a una página o abrir un modal con las personas autorizadas
    this.router.navigate(['/authorized-persons']);
  }
  
}
