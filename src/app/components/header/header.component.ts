import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { MobileHoursPanelComponent } from '../mobile-hours-panel/mobile-hours-panel.component';

@Component({
  selector: 'spca-header',
  imports: [CommonModule, HeaderMenuComponent, RouterLink, MobileHoursPanelComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMobileHoursPanel = false;  
}
