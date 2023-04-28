import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveComponent } from './form.component';
import { AxControlComponent } from '../ax-control/ax-control.component';
import { ValidationComponent } from '../validation/validation.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormComponent', () => {
    let component: FormReactiveComponent;
    let fixture: ComponentFixture<FormReactiveComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule
            ],
            declarations: [
                FormReactiveComponent,
                AxControlComponent,
                ValidationComponent
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FormReactiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
