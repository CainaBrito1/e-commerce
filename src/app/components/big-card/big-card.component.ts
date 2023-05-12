import { Component, OnInit } from '@angular/core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {}


  url:string = "../assets/images/product-1.jpg";
  imageChange(event:any){
    this.url = event.target.src;
  }

  faStar = faStar;
  faShoppingBasket = faShoppingBasket;
  faSearch = faSearch;
  faHeart = faHeart;
}
