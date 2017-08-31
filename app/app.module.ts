import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/index';
import { FooterComponent } from './components/footer/index';
import { AboutComponent } from './components/about/index';
import { ProjectsComponent } from './components/projects/index';
import { ExperienceComponent } from './components/experience/index';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { ProductService, PubSubService } from './_services/index';
import 'rxjs/add/operator/toPromise';
import { ProfileService } from './services/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
		HttpModule
    ],
    declarations: [
        AppComponent,
        routedComponents,
		HeaderComponent,
		AboutComponent,
		ProjectsComponent,
		ExperienceComponent,
		FooterComponent
    ],
    providers: [
        ProductService,
        PubSubService,
		ProfileService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }