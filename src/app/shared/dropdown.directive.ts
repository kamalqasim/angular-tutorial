import {Directive, HostBinding, HostListener, ViewChild} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @ViewChild('myClassShow') myClass: string;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
