import { Directive, HostBinding, HostListener, Input, EventEmitter } from '@angular/core';
('@angular/core');

@Directive({
  selector: '[appFavorite]',
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite: boolean = true;
  @HostBinding('class.is-favorite-hovering') hovering: boolean = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }

  @Input() set appFavorite(value: boolean) {
    this.isFavorite = value;
  }
}
