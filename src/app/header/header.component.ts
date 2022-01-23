import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  firstInfo = [
    {
      type: "link",
      text: "hello@fabevy.com"
    },
    {
      type: "text",
      text: "Free Shipping for all Order of $99"
    }
  ];

  socialLinks = [
    {
      class: "fa-facebook",
      link: "#"
    },
    {
      class: "fa-twitter",
      link: "#"
    },
    {
      class: "fa-linkedin",
      link: "#"
    },
    {
      class: "fa-pinterest-p",
      link: "#"
    },
  ];
  languages = [
    {
      text: "Spanish",
      link: "#"
    },
    {
      text: "English",
      link: "#"
    }
  ];
  authLinks = [
    {
      text: "Login",
      link: "#",
      class: "fa-user"
    }
  ];
  logo = "assets/img/xlogo.png.pagespeed.ic.ap5icp--OT.png";
  headerMenu = [
    {
      text: "Home",
      link: "index-2.html",
      isActive: true
    }, {
      text: "Shop",
      link: "shop-grid.html",
      isActive: false
    }, {
      text: "Blog",
      link: "blog.html",
      isActive: false
    }, {
      text: "Contact",
      link: "contact.html",
      isActive: false
    }
  ];
  cart: number = 250;

  constructor() { }

  ngOnInit(): void {
  }

}

