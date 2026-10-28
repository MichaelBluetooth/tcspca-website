import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PetFinderBannerComponent } from './pet-finder-banner/pet-finder-banner.component';
import { NavBoxesComponent } from './nav-boxes/nav-boxes.component';
import { HappyAdoptionsSliderComponent } from './happy-adoptions-slider/happy-adoptions-slider.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';

@Component({
    selector: 'spca-home',
    imports: [RouterModule, HomeBannerComponent, PetFinderBannerComponent, NavBoxesComponent, HappyAdoptionsSliderComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

}
