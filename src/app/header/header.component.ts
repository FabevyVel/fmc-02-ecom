import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DataProviderService]
})
export class HeaderComponent implements OnInit {

  firstInfo;

  socialLinks;

  languages;

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
      link: "/",
      isActive: true
    }, {
      text: "Shop",
      link: "/shop",
      isActive: false
    }, {
      text: "Blog",
      link: "/blog",
      isActive: false
    }, {
      text: "Contact",
      link: "/contact",
      isActive: false
    }
  ];
  cart: number = 250;

  constructor(private dataProviderService: DataProviderService) {


    
  }

  ngOnInit(): void {

    let socialLink = {
      class: "fa-twitter",
      link: "#"
    }

   // this.dataProviderService.postSocialLink(socialLink);

    this.firstInfo = this.dataProviderService.getFirstInfo();
    this.dataProviderService.getSocialLinks().subscribe(res => {
      this.socialLinks = res;
      console.log(this.socialLinks);
    });
    this.languages = this.dataProviderService.getLanguages();
  }

}

