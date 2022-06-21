import { Directive, HostBinding, Input, EventEmitter } from '@angular/core';"@angular/core";

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite: boolean = true;
  @Input() set appFavorite(value: boolean) { this.isFavorite = value; }
}