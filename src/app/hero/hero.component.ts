import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private router: Router) { }
  departments = [
    {
      name: 'Fresh Meat',
      link: '#'
    },
    {
      name: 'Vegetables',
      link: '#'
    },
    {
      name: 'Fruit & Nut Gifts',
      link: '#'
    },
    {
      name: 'Fresh Berries',
      link: '#'
    },
    {
      name: 'Ocean Foods',
      link: '#'
    },
    {
      name: 'Butter & Eggs',
      link: '#'
    },
    {
      name: 'Fastfood',
      link: '#'
    },
    {
      name: 'Fresh Onion',
      link: '#'
    },
    {
      name: 'Papayaya & Crisps',
      link: '#'
    },
    {
      name: 'Oatmeal',
      link: '#'
    },
    {
      name: 'Fresh Bananas',
      link: '#'
    }
  ];

  contact = '+65 11.188.888';

  hero = {
    image: 'assets/img/hero/banner.jpg',
    tag: 'Fruit Fresh',
    title: '100% Organic',
    description: 'Free Pickup and Delivery Available',
    cta: 'Shop Now',
    link: '#'
  }

  ngOnInit(): void {
  }

  handleShopNavigation(){
    console.log('Hello');
    this.router.navigate(['/shop']);
  }

}
