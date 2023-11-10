import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/APIS/api-amortiza/auth.service';

@Component({
  selector: 'app-acceso-presentacion',
  templateUrl: './acceso-presentacion.component.html',
  styleUrls: ['./acceso-presentacion.component.css']
})
export class AccesoPresentacionComponent {
  public checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private authService: AuthService,
              private router: Router) {
    this.checkoutForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      const credentials = this.checkoutForm.value;

      this.authService.login(credentials).subscribe(
        (response) => {
          // Manejar la respuesta exitosa
          if (response.estado) {
            console.log(response.mesaje);
            console.log('Usuario logueado:', response.dato);
            console.log('Token recibido:', response.token);

            // Almacena el token en el servicio de autenticación
            this.authService.setToken(response.token);

            // Puedes redirigir a otra página aquí si es necesario
            this.router.navigate(['/admin']);
          } else {
            // La API devolvió un estado falso, puedes manejar el error según tus necesidades
            console.error('Error al iniciar sesión:', response.mesaje);
          }
        },
        (error) => {
          // Manejar errores, mostrar mensajes, etc.
          console.error('Error al comunicarse con la API:', error);
        }
      );
    }
  }
}
