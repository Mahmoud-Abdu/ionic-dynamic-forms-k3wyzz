import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicModule, Platform } from 'ionic-angular';
import { Config } from '../config';

import { HomeModule } from '../pages/home/home.module';
import { Form1Module } from '../pages/form1/form1.module';
import { Form2Module } from '../pages/form2/form2.module';
import { MyApp } from './app.component';

import { SlideBoxModule } from '../pages/slide-box/slide-box.module';
import { WordpressModule } from '../pages/wordpress/wordpress.module';
import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { ComponentsModule } from '../pages/components/components.module';




@NgModule({
	declarations: [
		MyApp
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),
		AgmCoreModule.forRoot(),
		HomeModule,
		Form1Module,
		Form2Module,
    SlideBoxModule,
    WordpressModule,
    GoogleMapsModule,
    ComponentsModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp
	],
	providers: [
		StatusBar,
		Config,  
	]
})
export class AppModule {
}
