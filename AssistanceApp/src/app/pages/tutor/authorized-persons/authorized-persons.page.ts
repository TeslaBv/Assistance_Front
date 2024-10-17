import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { LogobarComponent } from "../../../components/logobar/logobar.component";
import { addIcons } from 'ionicons';
import { add, personAdd } from 'ionicons/icons';
import { Router, RouterLink } from '@angular/router';

interface AuthorizedPersons {
  nombre: string;
  parentesco: string;
  image:string;
}

@Component({
  selector: 'app-authorized-persons',
  templateUrl: './authorized-persons.page.html',
  styleUrls: ['./authorized-persons.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonCardContent, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LogobarComponent, RouterLink]
})
export class AuthorizedPersonsPage implements OnInit {

  authPersons: AuthorizedPersons[] = [
    {
      nombre: "Jose Jose",
      parentesco: "Tio",
      image: "https://yt3.googleusercontent.com/ZPi_domHKB7EKF8w35M1DoBsUDTF1yPDhNDhUoLK8HCJcqn024RxUX76bfdVXUQ_CjRKkYPM_BM=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      nombre: "Rodrigo NSQK", 
      parentesco: "Hermano",
      image: "https://i1.sndcdn.com/artworks-vQ1mPe7LswAMkjcd-oHthhg-t500x500.jpg"
    },{
      nombre: "Claudia Sheinbaum",
      parentesco: "Madre",
      image: "https://sabervotar.mx/wp-content/uploads/2023/07/CLAUDIA-SHEINBAUM-PARDO.png"
    }
  ];


  constructor(private router : Router) {
    addIcons({personAdd})
   }

  ngOnInit() {
  }

  generateQR(person : AuthorizedPersons){
    this.router.navigate(['/generateQR'], { queryParams: { nombre: person.nombre} });
  }

}
