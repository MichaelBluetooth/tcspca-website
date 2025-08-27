import { Component, DOCUMENT, ElementRef, inject, QueryList, ViewChildren } from '@angular/core';
import { NavPanelComponent } from '../nav-panel/nav-panel.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

export type MENU_ITEM_TYPES = 'adopt' | 'support' | 'services' | 'get-involved' | null;

@Component({
  selector: 'spca-header',
  imports: [CommonModule, NavPanelComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChildren('.menu-item', { read: ElementRef }) menuItems!: QueryList<ElementRef>;

  selectedMenu: MENU_ITEM_TYPES = null;
  previousItem: any;

  router = inject(Router);
  document: Document = inject(DOCUMENT);

  ngOnInit() {
    //Whenever a new page is loaded, hide the nav panel
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.hideNav();
    });    
  }

  showNav(selectedMenu: MENU_ITEM_TYPES, item: HTMLAnchorElement) {
    const elements: any = this.document.getElementsByClassName('menu-item');
    for(let i = 0; i < elements.length; i++){
      elements[i].classList.remove('menu-item-active');
    }    

    if (this.previousItem === item) {
      this.selectedMenu = null;
      this.previousItem = null;
    } else {
      this.previousItem = item;
      item.classList.add('menu-item-active');
      this.selectedMenu = selectedMenu;
    }
  }

  hideNav() {
    this.selectedMenu = null;
    this.previousItem = null;
    const elements: any = this.document.getElementsByClassName('menu-item');
    for(let i = 0; i < elements.length; i++){
      elements[i].classList.remove('menu-item-active');
    }
  }
}
