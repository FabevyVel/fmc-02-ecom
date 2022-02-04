import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  firstInfo = [
    {
      type: "link",
      text: "hello123@fabevy.com"
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

  logo = "assets/img/xlogo.png.pagespeed.ic.ap5icp--OT.png";

  cart: number = 250;


  constructor(private http: HttpClient) { }


  postSocialLink(socialLink){
    console.log('post social link');
    this.http.post('https://fmc02-4f9d2-default-rtdb.asia-southeast1.firebasedatabase.app/social.json', socialLink).subscribe(response => {
      console.log(response);
    });
    console.log('post social link ends');
  }

  getFirstInfo(){
    return this.firstInfo;
  }

  getSocialLinks(){

    return this.http.get('https://fmc02-4f9d2-default-rtdb.asia-southeast1.firebasedatabase.app/social.json')

  }

  getLanguages(){
    return this.languages;
  }
}
