import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { NavAccordionComponent } from '../nav-accordion/nav-accordion.component';

@Component({
  selector: 'spca-page',
  imports: [CommonModule, NavAccordionComponent],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  @Input() title: string = '';
}
