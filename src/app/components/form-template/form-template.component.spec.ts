import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateComponent } from './form-template.component';
import { FormsModule } from '@angular/forms';
import { AxControlComponent } from '../ax-control/ax-control.component';
import { ValidationComponent } from '../validation/validation.component';

describe('FormTemplateComponent', () => {
    let component: FormTemplateComponent;
    let fixture: ComponentFixture<FormTemplateComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                FormTemplateComponent,
                AxControlComponent,
                ValidationComponent
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FormTemplateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
