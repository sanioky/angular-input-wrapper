import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormReactiveComponent } from './components/form/form.component';
import { AxControlComponent } from './components/ax-control/ax-control.component';
import {
    FormsModule, ReactiveFormsModule
} from '@angular/forms';
import { ValidationComponent } from './components/validation/validation.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';

@NgModule({
    declarations: [
        AppComponent,
        FormReactiveComponent,
        AxControlComponent,
        ValidationComponent,
        FormTemplateComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
