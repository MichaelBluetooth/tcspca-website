import { Component, ElementRef, EventEmitter, Output, QueryList, ViewChildren } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'spca-mobile-nav-menu',
  imports: [RouterModule],
  templateUrl: './mobile-nav-menu.component.html',
  styleUrl: './mobile-nav-menu.component.scss'
})
export class MobileNavMenuComponent {
  @ViewChildren('collaspibleSection') sections!: QueryList<ElementRef>;
  @ViewChildren('navMenuBody') bodies!: QueryList<ElementRef>;
  @ViewChildren('navMenuToggle') toggles!: QueryList<ElementRef>;

  @Output() closed = new EventEmitter();

  visibleMenuIdx: number | null = null;

  ngAfterViewInit() {
    this.collapseAll();
  }

  showMenu(idx: number) {
    this.collapseAll();

    if (idx !== this.visibleMenuIdx) {
      this.visibleMenuIdx = idx;
      (this.toggles.get(idx)?.nativeElement as HTMLElement).classList.remove('fa-chevron-down');
      (this.toggles.get(idx)?.nativeElement as HTMLElement).classList.add('fa-chevron-up');
      (this.sections.get(idx)?.nativeElement as HTMLElement).classList.add('bg-dark');
      (this.bodies.get(idx)?.nativeElement as HTMLElement).classList.remove('hidden');
    } else {
      this.visibleMenuIdx = null;
    }
  }

  collapseAll() {
    this.bodies.forEach((item, idx) => {
      (this.sections.get(idx)?.nativeElement as HTMLElement).classList.remove('bg-dark');
      (this.toggles.get(idx)?.nativeElement as HTMLElement).classList.remove('fa-chevron-up');
      (this.toggles.get(idx)?.nativeElement as HTMLElement).classList.add('fa-chevron-down');
      (item.nativeElement as HTMLElement).classList.add('hidden');
    });
  }
}
