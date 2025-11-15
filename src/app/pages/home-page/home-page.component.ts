import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  contactEmail = 'sivagangadharreddy1999@gmail.com';
  // contactEmail1 = 'support@retrievegenie.com';
  menuOpen = false;
  // isDarkMode = false;

  @ViewChild('menuElement') menuRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: Event) {
  const clickedInsideMenu = this.menuRef?.nativeElement.contains(event.target);
  const clickedHamburger = (event.target as HTMLElement).closest('.hamburger');

  if (!clickedInsideMenu && !clickedHamburger) {
    this.closeMenu();
  }
}
  @HostListener('window:scroll')
  onScroll() {
    this.closeMenu();
  }

}


