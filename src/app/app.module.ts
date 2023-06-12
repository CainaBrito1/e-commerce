import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { PolicyComponent } from './components/policy/policy.component';
import { PolicyProductComponent } from './components/policy-product/policy-product.component';
import { PartnersComponent } from './components/partners/partners.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './components/footer/footer.component';
import { MidiasComponent } from './components/midias/midias.component';
import { DireitosAutoraisComponent } from './components/direitos-autorais/direitos-autorais.component';
import { HeaderSliderComponent } from './components/header-slider/header-slider.component';
import { BannerSliderComponent } from './components/banner-slider/banner-slider.component';
import { BestSellingComponent } from './components/best-selling/best-selling.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BigCardComponent,
    PolicyComponent,
    PolicyProductComponent,
    PartnersComponent,
    FooterComponent,
    MidiasComponent,
    DireitosAutoraisComponent,
    
    HeaderSliderComponent,
         BannerSliderComponent,
         BestSellingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
