import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
  standalone: false,
})
export class Resaltado {
  @Input('appResaltado') color!: string;
  constructor(private elemento: ElementRef) {
    this.elemento.nativeElement.style.color = 'black';
    this.elemento.nativeElement.style.padding = '5px';
  }

  ngOnInit() {
    this.update();
  }

  ngOnChanges() {
    this.update();
  }

  update() {
    this.elemento.nativeElement.style.backgroundColor = this.color ? this.color : 'yellow';
  }
}
