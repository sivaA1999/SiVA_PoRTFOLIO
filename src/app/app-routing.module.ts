import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { BuddyListPageComponent } from './pages/buddy-list-page/buddy-list-page.component';
import { ChatlyAssistantPageComponent } from './pages/chatly-assistant-page/chatly-assistant-page.component';
import { ContactMePageComponent } from './pages/contact-me-page/contact-me-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'resume', component: ResumePageComponent },
  { path: 'buddy-list', component: BuddyListPageComponent },
  { path: 'chatly', component: ChatlyAssistantPageComponent },
  { path: 'contact-me', component: ContactMePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







