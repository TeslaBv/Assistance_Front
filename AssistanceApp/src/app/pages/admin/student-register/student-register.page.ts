import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonSegment, IonLabel, IonSegmentButton, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { LogobarComponent } from "../../../components/logobar/logobar.component";
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.page.html',
  styleUrls: ['./student-register.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonSegmentButton, IonLabel, IonSegment, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LogobarComponent, ReactiveFormsModule]
})
export class StudentRegisterPage implements OnInit {
  studentForm: FormGroup;
  idTutor: number = 0;
  errorMensaje: string = '';
  selectedImage: File | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private adminS: AdminService
  ) {
    // Crear el formulario con validaciones
    this.studentForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(1)]],
      apellidoP: ['', [Validators.required, Validators.minLength(1)]],
      apellidoM: [''],
      fecha_nacimiento: ['', Validators.required],
      direccion: ['', [Validators.required]],
      id_tutor: [0, Validators.required],
    });
  }

  ngOnInit() {
    // Obtener el id del tutor desde la URL
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.idTutor = parseInt(id, 10);

      this.studentForm.patchValue({
        id_tutor: this.idTutor,
      });
    } else {
      console.error('No se encontró el id del tutor en la URL');
      this.router.navigate(['/error']); // Opcional, redirigir a página de error
    }
  }

  // Getter para obtener los controles más fácilmente
  get nombre() {
    return this.studentForm.get('nombre');
  }
  get apellidoP() {
    return this.studentForm.get('apellidoP');
  }
  get apellidoM() {
    return this.studentForm.get('apellidoM');
  }
  get fecha_nacimiento() {
    return this.studentForm.get('fecha_nacimiento');
  }
  get direccion() {
    return this.studentForm.get('direccion');
  }

  // Método para registrar estudiante con imagen
  registerStudent() {
    if (this.studentForm.valid && this.selectedImage) {
      console.log('Formulario válido', this.studentForm.value);
  
      // Crear un objeto FormData
      const formData = new FormData();
  
      // Agregar los campos del formulario a FormData
      Object.keys(this.studentForm.value).forEach((key) => {
        formData.append(key, this.studentForm.value[key]);
      });
  
      // Agregar la imagen seleccionada
      formData.append('foto', this.selectedImage);
  
      // Enviar al backend
      this.adminS.addStudent(formData).subscribe({
        next: (response) => {
          console.log('Estudiante registrado:', response);
          this.router.navigate(['/tutors']);
        },
        error: (err) => {
          console.error('Error al registrar estudiante:', err);
        },
      });
    } else {
      this.errorMensaje = this.selectedImage
        ? 'Por favor, complete todos los campos correctamente.'
        : 'Por favor, seleccione una imagen.';
    }
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      console.log('Imagen seleccionada:', this.selectedImage);
    }
  }

  // Método para regresar a la página anterior
  regresar() {
    this.router.navigate(['/tutors']); // O la ruta de regreso que desees
  }

  // Método para obtener el mensaje de error
  getErrorMessage(controlName: string): string {
    const control = this.studentForm.get(controlName);
    if (control?.hasError('required')) {
      return `${controlName} es requerido.`;
    }
    return '';
  }
}
