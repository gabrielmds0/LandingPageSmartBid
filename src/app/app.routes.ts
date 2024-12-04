import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { Body2Component } from './body2/body2.component';
import { Body3Component } from './body3/body3.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {path: 'body', component: BodyComponent},
    {path: 'body2', component: Body2Component},
    {path: 'body3', component: Body3Component},
    {path: 'form', component: FormComponent}
];
