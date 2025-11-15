import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactMePageComponent } from './pages/contact-me-page/contact-me-page.component';
import { ChatlyAssistantPageComponent } from './pages/chatly-assistant-page/chatly-assistant-page.component';
import { BuddyListPageComponent } from './pages/buddy-list-page/buddy-list-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { NavBubbleComponentComponent } from './components/nav-bubble-component/nav-bubble-component.component';
import { TickerComponentComponent } from './components/ticker-component/ticker-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactMePageComponent,
    ChatlyAssistantPageComponent,
    BuddyListPageComponent,
    ResumePageComponent,
    ProjectsPageComponent,
    FooterComponentComponent,
    NavBubbleComponentComponent,
    TickerComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
