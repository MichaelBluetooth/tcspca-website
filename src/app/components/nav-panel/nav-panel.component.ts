import { Component, ElementRef, EventEmitter, HostListener, inject, Input, Output } from '@angular/core';
import { MENU_ITEM_TYPES } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'spca-nav-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-panel.component.html',
  styleUrl: './nav-panel.component.scss'
})
export class NavPanelComponent {
  @Input() selectedMenu: MENU_ITEM_TYPES = null;
  @Output() closed = new EventEmitter();

  eRef: ElementRef = inject(ElementRef);

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.closed.emit();
    }
  }
}
