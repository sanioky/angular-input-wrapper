import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormReactiveComponent } from './components/form/form.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';

const routes: Routes = [
    {
        path: 'form-reactive',
        component: FormReactiveComponent
    },
    {
        path: 'form-template',
        component: FormTemplateComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/form-reactive'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
