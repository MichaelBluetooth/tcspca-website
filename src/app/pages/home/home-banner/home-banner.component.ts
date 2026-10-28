import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'spca-home-banner',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.scss'
})
export class HomeBannerComponent {
  private readonly swiper = viewChild<ElementRef<SwiperContainer>>('swiper');

  sliderBreakPoints = {
    // 640: { slidesPerView: 2 },
    // 1024: { slidesPerView: 3 }
  }

  nextSlide(): void {
    this.swiper()?.nativeElement.swiper?.slideNext();
  }

  previousSlide(): void {
    this.swiper()?.nativeElement.swiper?.slidePrev();
  }
}
