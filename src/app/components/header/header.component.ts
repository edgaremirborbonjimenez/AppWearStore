import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenubarModule,
    CommonModule,
    AvatarModule
  ],
  templateUrl: './header.component.html',
  // styleUrl: './header.component.css',
  styles:[]
})
export class HeaderComponent {
  items = [
    {
      label: 'File',
      items: [
        { label: 'New', badge: 'pi pi-fw pi-plus' },
        { label: 'Open', badge: 'pi pi-fw pi-folder-open' },
        { label: 'Save', badge: 'pi pi-fw pi-save' }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: 'pi pi-fw pi-undo' },
        { label: 'Redo', icon: 'pi pi-fw pi-redo' }
      ]
    }
  ];
}
