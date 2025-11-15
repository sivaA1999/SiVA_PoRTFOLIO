import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-bubble-component',
  templateUrl: './nav-bubble-component.component.html',
  styleUrls: ['./nav-bubble-component.component.css']
})
export class NavBubbleComponentComponent implements OnInit{

  constructor(
    private location: Location, // <--- Now this refers to @angular/common/Location
    private router: Router
  ) {}

  goBack() {
    this.location.back(); // <--- This will now work correctly!
  }

  goHome() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {}

}


 




