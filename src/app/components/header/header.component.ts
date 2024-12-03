import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    BadgeModule,
    MenubarModule,
    CommonModule,
    AvatarModule,
  ],
  templateUrl: './header.component.html',
  styles:[]
})
export class HeaderComponent implements OnInit {
  items = [
    {
      label: 'WearStore',

    }
  ];

  login ={
    icon: 'pi-user'
  }

  loggedUser:any;

constructor(public _auth:AuthService){}

ngOnInit(): void {
    if(this._auth.user$){
      this._auth.user$.subscribe((data)=>{
        this.loggedUser = data;
        debugger
        console.log(`Logged In User ${this.loggedUser}`);
      })
    }
}

}
