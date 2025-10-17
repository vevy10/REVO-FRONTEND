import { Routes } from '@angular/router';
import { SignIn } from './pages/sign-in/sign-in';
import { SignUp } from './pages/sign-up/sign-up';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {
        path: 'sign-in',
        component: SignIn,
        title: 'REVO | se connecter'
    },
    {
        path: 'sign-up',
        component: SignUp,
        title: "REVO | s'inscrire"
    },
    {
        path: 'dashboard',
        component: Dashboard,
        title: 'REVO | Tableau de bord'
    }
];
