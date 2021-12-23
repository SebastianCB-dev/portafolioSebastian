import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  activeItem!: MenuItem;
  position: number = 9;
  display: boolean = false;
  constructor(@Inject(DOCUMENT) document: any) {
    let location = document.location.pathname;
    location = location.split('/').splice(1,1);
    this.validarActivePage(location);
  
  }

  ngOnInit() {
    
     this.items = [
      {
        label: "Home",
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Certificates',
        icon: 'pi pi-user',
        routerLink: 'certificates'      
      },
      {
        label: 'Knowledge',
        icon: 'pi pi-desktop',
        routerLink: 'knowledge'
      },
      {
        label: 'Git-Hub',
        icon: 'pi pi-github',
        routerLink: 'github'
      },
      {
        label: 'Projects',
        icon: 'pi pi-folder',
        routerLink: 'projects'
      },
      {
        label: 'Contact',
        icon: 'pi pi-mobile',
        routerLink: 'contact'
      }
  
    ];

    this.activeItem = this.items[this.position];
  }

  validarActivePage( page: string) {
    switch( page[0]) {
      case '':
        this.position = 0;
        break;
      case 'certificates':
        this.position = 1;
        break;
      case 'knowledge':
        this.position = 2;
        break;
      case 'github':
        this.position = 3;
        break;
      case 'projects':
          this.position = 4;
          break;
      case 'contact':
        this.position = 5;
        break;
      default: 
      this.position = 10;
    }
  }
  

}
