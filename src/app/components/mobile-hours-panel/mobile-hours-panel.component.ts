import { Component, DOCUMENT, EventEmitter, Inject, Output, output, Renderer2 } from '@angular/core';

@Component({
  selector: 'spca-mobile-hours-panel',
  imports: [],
  templateUrl: './mobile-hours-panel.component.html',
  styleUrl: './mobile-hours-panel.component.scss'
})
export class MobileHoursPanelComponent {
  @Output() closed = new EventEmitter();

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer.addClass(this.document.body, 'no-scroll');
  }

  close() {
    this.renderer.removeClass(this.document.body, 'no-scroll');
    this.closed.emit();
  }

  ngOnDestroy() {
    // Always clean up in case the component is destroyed unexpectedly
    this.renderer.removeClass(this.document.body, 'no-scroll');
  }
}
