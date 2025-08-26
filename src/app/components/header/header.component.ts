import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { NavPanelComponent } from '../nav-panel/nav-panel.component';
import { CommonModule } from '@angular/common';

export type MENU_ITEM_TYPES = 'adopt' | 'support' | 'services' | 'get-involved' | null;

@Component({
  selector: 'spca-header',
  standalone: true,
  imports: [CommonModule, NavPanelComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChildren('.menu-item', { read: ElementRef }) menuItems!: QueryList<ElementRef>;

  selectedMenu: MENU_ITEM_TYPES = null;
  previousItem: any;

  showNav(selectedMenu: MENU_ITEM_TYPES, item: HTMLAnchorElement) {
    const elements: any = document.getElementsByClassName('menu-item');
    for (const element of elements) {
      element.classList.remove('menu-item-active');
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
    const elements: any = document.getElementsByClassName('menu-item');
    for (const element of elements) {
      element.classList.remove('menu-item-active');
    }
  }
}
