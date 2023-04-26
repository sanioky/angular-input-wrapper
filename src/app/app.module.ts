import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { AxControlComponent } from './components/ax-control/ax-control.component';
import {
    FormsModule, ReactiveFormsModule
} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        AxControlComponent
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
