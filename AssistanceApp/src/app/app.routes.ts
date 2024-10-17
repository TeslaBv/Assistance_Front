import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'dashboardAdmin',
    loadComponent: () => import('./pages/admin/dashboard-admin/dashboard-admin.page').then( m => m.DashboardAdminPage)
  },
  {
    path: 'checkin',
    loadComponent: () => import('./pages/admin/checkin/checkin.page').then( m => m.CheckinPage)
  },
  {
    path: 'checkout',
    loadComponent: () => import('./pages/admin/checkout/checkout.page').then( m => m.CheckoutPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/admin/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'infocheckin',
    loadComponent: () => import('./pages/admin/infocheckin/infocheckin.page').then( m => m.InfocheckinPage)
  },
  {
    path: 'check',
    loadComponent: () => import('./pages/admin/check/check.page').then( m => m.CheckPage)
  },
  {
    path: 'dashboardTutor',
    loadComponent: () => import('./pages/tutor/dashboard-tutor/dashboard-tutor.page').then( m => m.DashboardTutorPage)
  },
  {
    path: 'generateQR',
    loadComponent: () => import('./pages/tutor/generate-qr/generate-qr.page').then( m => m.GenerateQRPage)
  },
  
];
