import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'spca-happy-adoptions-slider',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './happy-adoptions-slider.component.html',
  styleUrl: './happy-adoptions-slider.component.scss'
})
export class HappyAdoptionsSliderComponent {
  private readonly swiper = viewChild<ElementRef<SwiperContainer>>('swiper');

  sliderBreakPoints = {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 2 },
    1200: { slidesPerView: 3 },
  }

  nextSlide(): void {
    this.swiper()?.nativeElement.swiper?.slideNext();
  }

  previousSlide(): void {
    this.swiper()?.nativeElement.swiper?.slidePrev();
  }
}
