import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit{

  contactEmail1 = "sivagangadharreddy1999@gmail.com";

  constructor() { }

  ngOnInit(): void {}
}


