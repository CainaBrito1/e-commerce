import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  partnersArray:any = [
    {
      imgName: "../assets/images/sponsor-1.png"
    },
    {
      imgName: "../assets/images/sponsor-2.png"
    },
    {
      imgName: "../assets/images/sponsor-3.png"
    },
    {
      imgName: "../assets/images/sponsor-4.png"
    },
    {
      imgName: "../assets/images/sponsor-5.png"
    },
    
  ]

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  }

}
