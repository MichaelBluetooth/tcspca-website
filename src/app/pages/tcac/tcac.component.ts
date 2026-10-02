import { Component } from '@angular/core';
import { PageComponent } from '../../components/page/page.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';

@Component({
    selector: 'spca-tcac',
    imports: [PageComponent, AccordionComponent],
    templateUrl: './tcac.component.html',
    styleUrl: './tcac.component.scss'
})
export class TcacComponent {

}
