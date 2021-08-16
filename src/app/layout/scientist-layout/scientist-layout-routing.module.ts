import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScientistLayoutComponent } from './scientist-layout.component';


const routes: Routes = [
    {
        path: '',
        component: ScientistLayoutComponent,
        children:
            [
                { path: '', redirectTo: 'home' },
                { path: 'home', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
                { path: 'projects', loadChildren: () => import('./projects/projects-routing.module').then(m => m.ProjectsRoutingModule)  }
            ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]   
})
export class ScientistLayoutRoutingModule { }
