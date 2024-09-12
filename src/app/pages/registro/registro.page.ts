import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  nombre: string = '';
  apellido: string = '';
  fechaNacimiento: string = '';

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }
  
  async register() {
    if (this.nombre && this.apellido && this.fechaNacimiento)  {
      console.log('Datos de Registro:', {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento
      });

      const birthDate = new Date(this.fechaNacimiento);
      const age = new Date().getFullYear() - birthDate.getFullYear();

      const alert = await this.alertController.create({
        header: 'Registro Exitoso',
        message: 'Te has registrado correctamente.',
        buttons: ['OK']
      });
      await alert.present();

      this.router.navigate(['/pagina-principal'], {
        queryParams: { age: age }
      });
    } else {
      alert('Por favor, completa todos los campos.');
    }
  } 
}
