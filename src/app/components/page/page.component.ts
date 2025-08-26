import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'spca-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {
  title: string = '';
  route = inject(ActivatedRoute);

  ngOnInit(){
    this.title = this.route.snapshot.children[0].data['title'];
  }
}
