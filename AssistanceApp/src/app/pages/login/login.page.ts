import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, IonCard, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { LogobarComponent } from "../../components/logobar/logobar.component";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonSegmentButton, IonSegment, IonCard, IonInput, IonLabel, IonItem, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, RouterModule, ReactiveFormsModule, LogobarComponent]
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup; // Definimos el formulario reactivo
  errorMensaje: string = '';
  segmentoSeleccionado: string = 'Administrador';

  constructor(
    private fb: FormBuilder, // FormBuilder para construir el formulario
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // Inicializamos el formulario con los campos y validaciones
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required]], // Campo correo con validación de email
      contrasenia: ['', [Validators.required]], // Contraseña con mínimo 6 caracteres
    });
  }

  // Getters para acceder fácilmente a los controles del formulario
  get correo() {
    return this.loginForm.get('correo')!;
  }

  get contrasenia() {
    return this.loginForm.get('contrasenia')!;
  }

  // Método para obtener los mensajes de error de un control
  getErrorMessage(controlName: string): string {
    const control = this.loginForm.get(controlName)!;
    if (control.hasError('required')) {
      return 'Este campo es obligatorio.';
    }
    if (control.hasError('email')) {
      return 'Debe ingresar un correo válido.';
    }
    if (control.hasError('minlength')) {
      const minLength = control.getError('minlength').requiredLength;
      return `Debe tener al menos ${minLength} caracteres.`;
    }
    return '';
  }

  // Método para iniciar sesión
  iniciarSesion() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); // Marcar todos los campos para mostrar errores
      return;
    }

    console.log(this.loginForm.value); // Muestra los datos ingresados en el formulario
    console.log(`Tipo de usuario: ${this.segmentoSeleccionado}`); // Verifica el segmento seleccionado

    // Verificar si el usuario es Administrador o Tutor
    if (this.segmentoSeleccionado === 'Administrador') {
      this.authService.loginAdmin(this.loginForm.value).subscribe({
        next: (resp: any) => {
          console.log(resp);
          if (resp) {
            //Agregar el token al session storage
            sessionStorage.setItem('token', resp.access_token);
            this.router.navigate(['/dashboardAdmin']); // Redirigir al dashboard de Admin
          } else {
            this.errorMensaje = resp.message || 'Correo o contraseña incorrectos.';
          }
        },
        error: (err) => {
          this.errorMensaje = 'Ocurrió un error al intentar iniciar sesión.';
          console.error(err);
        },
      });
    } else if (this.segmentoSeleccionado === 'Tutor') {
      this.authService.loginTutor(this.loginForm.value).subscribe({
        next: (resp: any) => {
          console.log(resp);
          if (resp) {
            this.router.navigate(['/dashboardTutor']); // Redirigir al dashboard de Tutor
          } else {
            this.errorMensaje = resp.message || 'Correo o contraseña incorrectos.';
          }
        },
        error: (err) => {
          this.errorMensaje = 'Ocurrió un error al intentar iniciar sesión.';
          console.error(err);
        },
      });
    }
  }

  userType(event: any) {
    this.segmentoSeleccionado = event.detail.value; // Obtiene el valor seleccionado
    console.log(`Nuevo segmento seleccionado: ${this.segmentoSeleccionado}`);
  }

  regresar() {
    this.router.navigate(['/home']); // Navegar a la página principal
  }

}
