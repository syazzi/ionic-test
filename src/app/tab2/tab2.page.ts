import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonModal, IonButton, IonRow, IonCol, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonModal, IonButton, IonRow, IonCol, IonIcon, IonButtons]
})
export class Tab2Page {

  constructor() {
    addIcons({ closeCircleOutline });
  }

}
