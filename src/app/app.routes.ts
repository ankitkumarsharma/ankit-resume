import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'home',
        loadComponent: () => import('./components/home/home').then(m => m.Home)
    },
    {
        path: 'about-me',
        loadComponent: () => import('./components/about-me/about-me').then(m => m.AboutMe)
    },
    {
        path: 'my-resume',
        loadComponent: () => import('./components/resume/resume').then(m => m.Resume)
    },
    {
        path: 'portfolio',
        loadComponent: () => import('./components/portfolio/portfolio').then(m => m.Portfolio)
    },
    {
        path: 'blogs-talks',
        loadComponent: () => import('./components/blog/blog').then(m => m.Blog)
    },
    {
        path: 'contact-me',
        loadComponent: () => import('./components/contact-me/contact-me').then(m => m.ContactMe)
    }
];
