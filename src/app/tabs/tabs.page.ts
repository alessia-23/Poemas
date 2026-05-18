import { Component, EnvironmentInjector, inject } from '@angular/core';

import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonHeader, IonToolbar, IonTitle, IonRouterOutlet } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import { home, library, musicalNotes } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonHeader, IonToolbar,
    IonTitle, IonRouterOutlet
  ],
})
export class TabsPage {

  public environmentInjector = inject(EnvironmentInjector);

  constructor() {

    addIcons({
      home, library, musicalNotes
    });

  }
}