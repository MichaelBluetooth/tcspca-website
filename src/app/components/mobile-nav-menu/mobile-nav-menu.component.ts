import { Component, ElementRef, EventEmitter, inject, Output, QueryList, ViewChildren } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

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

  router = inject(Router);

  visibleMenuIdx: number | null = null;

  ngOnInit() {
    //Whenever a new page is loaded, hide the nav panel
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closed.emit();
    });
  }

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
