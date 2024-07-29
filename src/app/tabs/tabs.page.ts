import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, calendar, ellipsisHorizontalOutline, addCircleOutline } from 'ionicons/icons';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ addCircleOutline, ellipsisHorizontalOutline, calendar, home });
  }
  tabs = [
    {name: "Home", icon: "home", url: "/tabs/tab1"},
    {name: "Bookings", icon: "add-circle-outline", url: "/tabs/tab2"},
    {name: "History", icon: "calendar", url: "/tabs/tab3"},
    {name: "More", icon: "ellipsis-horizontal-outline", url: "/tabs/tab1"}

  ]
}
