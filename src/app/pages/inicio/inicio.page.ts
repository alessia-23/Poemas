import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonContent,
    IonButton,
    IonIcon
  ]
})
export class InicioPage implements OnInit {

  constructor() {
    // Registramos el icono nativo de la flecha para que Ionic lo reconozca en el HTML
    addIcons({ arrowForwardOutline });
  }

  ngOnInit() {
    // Aquí puedes inicializar animaciones o lógica de carga más adelante si lo necesitas
  }
}