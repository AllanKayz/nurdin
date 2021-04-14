import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdministrationComponent } from './administration/administration.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WorksComponent } from './works/works.component';
import { DashboardComponent } from './administration/dashboard/dashboard.component';
import { MessagesComponent } from './administration/messages/messages.component';
import { TasksComponent } from './administration/tasks/tasks.component';
import { SitemanagerComponent } from './administration/sitemanager/sitemanager.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'portfolio', component: WorksComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'administration', component: AdministrationComponent, children: [
      { path: 'administration', redirectTo: 'administration/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'sitemanager', component: SitemanagerComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
