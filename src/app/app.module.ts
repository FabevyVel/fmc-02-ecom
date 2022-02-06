import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { CategoriesComponent } from './categories/categories.component';
import { FeaturedComponent } from './featured/featured.component';
import { BannerComponent } from './banner/banner.component';
import { LatestProductComponent } from './latest-product/latest-product.component';
import { FromBlogComponent } from './from-blog/from-blog.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShopComponent } from './shop/shop.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { BlogComponent } from './blog/blog.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductsRelatedComponent } from './products-related/products-related.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'add-product',
    component: ProductAddComponent
  },
  {
    path: 'product/:pid',
    component: ProductDetailComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    CategoriesComponent,
    FeaturedComponent,
    BannerComponent,
    LatestProductComponent,
    FromBlogComponent,
    FooterComponent,
    HomeComponent,
    BreadcrumbComponent,
    ProductsListComponent,
    ShopComponent,
    ArticlesListComponent,
    BlogComponent,
    ContactsListComponent,
    ContactComponent,
    ProductInfoComponent,
    ProductsRelatedComponent,
    ProductDetailComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
