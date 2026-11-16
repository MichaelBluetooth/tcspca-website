import { CommonModule } from '@angular/common';
import { Component, DOCUMENT, ElementRef, inject, Inject, QueryList, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'spca-nav-accordion',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-accordion.component.html',
  styleUrl: './nav-accordion.component.scss'
})
export class NavAccordionComponent {
  static SAVED_PANEL_KEY = 'spca-nav-accordion-open-section';

  @ViewChildren('navContainerLinks') items!: QueryList<ElementRef>;

  private document = inject(DOCUMENT);
  protected window = this.document.defaultView;


  ngAfterViewInit() {
    //TODO: instead of remembering the last open panel section
    // the site should expand the relevant section
    // e.g. the "gifts" route should expand the "Support the SPCA" section
    // e.g. the "dogs" route should expand the "Adopt a Pet" section
    const openedPanelId = this.window?.localStorage?.getItem(NavAccordionComponent.SAVED_PANEL_KEY);
    if (openedPanelId) {
      this.toggleSection(openedPanelId);
    }
  }

  toggleSection(elementId: string) {
    const el: HTMLElement = document.getElementById(elementId)!;
    el.classList.toggle('hidden');

    this.window?.localStorage.setItem(NavAccordionComponent.SAVED_PANEL_KEY, elementId);

    this.items.filter(i => i.nativeElement.id !== elementId).forEach(item => {
      (item.nativeElement as HTMLElement).classList.add('hidden');
    });
  }
}
