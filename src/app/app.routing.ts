import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { DashComponent } from './pages/dash/dash.component';

import { HowtouseComponent } from './pages/howtouse/howtouse.component';
import { PublicityComponent } from './pages/publicity/publicity.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { HomeComponent } from './pages/home/home.component';
import { CopacabanaComponent } from './pages/case-study/copacabana/copacabana.component';
import { HowToActComponent } from './pages/how-to-act/how-to-act.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { PartnersComponent } from './pages/partners/partners.component';

import { Article1Component } from './publications/article1/article1.component'
import { Article2Component } from './publications/article2/article2.component'

import { Note1Component } from './publications/note1/note1.component'
import { Note2Component } from './publications/note2/note2.component'
import { Note3Component } from './publications/note3/note3.component'

const routes: Routes =[
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',    component: HomeComponent },
  { path: 'copacabana',    component: CopacabanaComponent },
  { path: 'dash',       component: DashComponent },
  { path: 'howtouse',    component: HowtouseComponent },
  { path: 'howtoact',    component: HowToActComponent },
  { path: 'statistics',    component: StatisticsComponent },
  { path: 'partners',    component: PartnersComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'nucleoicons',component: NucleoiconsComponent },
  { path: 'publications',    component: PublicationsComponent,
  children: [
    {
      path: 'note1',
      component: Note1Component
    },
    {
      path: 'note2',
      component: Note2Component
    },
    {
      path: 'note3',
      component: Note3Component
    },
    {
      path: 'article1',
      component: Article1Component
    },
    {
      path: 'article2',
      component: Article2Component
    }
  ]
},
{ path: 'aboutus',    component: AboutusComponent },
{ path: 'publicity',    component: PublicityComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
