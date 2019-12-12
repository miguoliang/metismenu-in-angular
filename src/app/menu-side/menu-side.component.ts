import { Component, AfterContentInit, ViewChild, ElementRef, TemplateRef, HostBinding } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-menu-side',
  template: `
  <ul class="metismenu" #el>
    <ng-content></ng-content>
  </ul>
  `,
  styles: ['']
})
export class MenuSideComponent implements AfterContentInit {

  @HostBinding('class') classes = 'sidebar-nav';

  @ViewChild('el', { static: true, read: ElementRef }) el: ElementRef;

  constructor() { }

  ngAfterContentInit() {
    $(this.el.nativeElement).metisMenu();
  }

}
