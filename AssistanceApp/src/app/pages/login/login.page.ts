import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, IonCard } from '@ionic/angular/standalone';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonCard, IonInput, IonLabel, IonItem, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, RouterModule]
})
export class LoginPage implements OnInit {
  @ViewChild('usuarioInput', { static: true }) usuarioInput!: IonInput;
  @ViewChild('passwordInput', { static: true }) passwordInput!: IonInput;



  constructor(private router: Router) { }

  ngOnInit() {
  }


  iniciarSesion(rol : number) {
    const usuario = this.usuarioInput.value;
    const password = this.passwordInput.value;
    
    console.log('Usuario:', usuario);
    console.log('Contraseña:', password);

    if (rol==0){
      this.router.navigate(['/dashboardAdmin']);
    }else{
      this.router.navigate(['/dashboardTutor']);
    }
  }
  regresar(){
    this.router.navigate(['/home']);
  }

}
