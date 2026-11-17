import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    constructor() {
        const router = inject(Router);
        const meta = inject(Meta);

        router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            takeUntilDestroyed()
        ).subscribe(() => {
            const description = router.routerState.snapshot.root.firstChild?.data['description'];
            if (description) {
                meta.updateTag({ name: 'description', content: description });
            }
        });
    }
}
