import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  navigate(){
    window.open('https://taggo.one/mmxxii_ambiental', '_blank');
  }

  focusOnElement() {
    this.renderer.selectRootElement('#about').focus();
  }
}
