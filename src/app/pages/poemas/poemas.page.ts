import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonFab,
  IonFabButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { createOutline, trashOutline, addOutline, bookOutline } from 'ionicons/icons';

// Definimos el contrato de datos exclusivo para Poemas
interface Poema {
  id: string;
  titulo: string;
  autor: string;
  contenido: string;
}

@Component({
  selector: 'app-poemas',
  templateUrl: './poemas.page.html',
  styleUrls: ['./poemas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonIcon,
    IonFab,
    IonFabButton
  ]
})
export class PoemasPage implements OnInit {

  // Lista local para manejar el CRUD
  listaPoemas: Poema[] = [
    {
      id: '1',
      titulo: 'Rima LXI',
      autor: 'Gustavo Adolfo Bécquer',
      contenido: 'Al ver mis horas de fiebre\ne insomnio lentas pasar,\nno sé en qué pinto al pensar:\n¿Por qué se llora al pesar?'
    },
    {
      id: '2',
      titulo: 'Poema 20',
      autor: 'Pablo Neruda',
      contenido: 'Puedo escribir los versos más tristes esta noche.\nEscribir, por ejemplo: "La noche está estrellada,\ny tiritan, azules, los astros, a lo lejos".'
    }
  ];

  constructor(private router: Router) {
    // Registramos todos los iconos líricos y de control
    addIcons({ createOutline, trashOutline, addOutline, bookOutline });
  }

  ngOnInit() {
    // Aquí puedes cargar los datos desde tu servicio de Supabase o LocalStorage en el futuro
  }

  // ACCIÓN DEL CRUD: Eliminar Poema
  eliminarPoema(id: string) {
    this.listaPoemas = this.listaPoemas.filter(poema => poema.id !== id);
    console.log('Poema eliminado con ID:', id);
  }

  // ACCIÓN DEL CRUD: Redirigir a edición
  editarPoema(poema: Poema) {
    console.log('Editando poema:', poema);
    // Aquí puedes pasar el objeto al formulario usando un estado o tu servicio
    // Por ahora redirigimos al formulario:
    this.router.navigate(['/videojuego-form'], { state: { poemaEditar: poema } });
  }
}