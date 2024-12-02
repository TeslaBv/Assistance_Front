import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonButton, IonToast, IonInput, IonItem, IonLabel, IonNote, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';
import { LogobarComponent } from "../../../components/logobar/logobar.component";
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonSegmentButton, IonSegment, IonNote, IonLabel, IonItem, IonInput, IonToast, IonButton, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LogobarComponent, CommonModule, ReactiveFormsModule]
})
export class RegisterPage implements OnInit {
  registerForm!: FormGroup;
  errorMensaje: string = '';

  constructor(private fb: FormBuilder, private router: Router, private adminS : AdminService) {}

  ngOnInit() {
    // Crear el formulario reactivo
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]],
    });
  }

  // Getters para acceder a los campos en el template
  get nombre() {
    return this.registerForm.get('nombre')!;
  }

  get correo() {
    return this.registerForm.get('correo')!;
  }

  get contrasena() {
    return this.registerForm.get('contrasena')!;
  }

  // Mensajes de error personalizados
  getErrorMessage(controlName: string): string {
    const control = this.registerForm.get(controlName);
    if (control?.hasError('required')) {
      return 'Este campo es obligatorio.';
    }
    if (controlName === 'correo' && control?.hasError('email')) {
      return 'Ingresa un correo válido.';
    }
    return '';
  }

  // Método para registrar
  registrar() {
    if (this.registerForm.valid) {
      this.adminS.addTutor(this.registerForm.value).subscribe((data:any) => {
        console.log(data);
        this.router.navigate(['/dashboardAdmin']);
      });
      // Redirigir al dashboard
      
    } else {
      this.errorMensaje = 'Por favor, completa todos los campos correctamente.';
    }
  }

  // Método para regresar
  regresar() {
    this.router.navigate(['/dashboardAdmin']);
  }
}
