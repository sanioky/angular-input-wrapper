import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationComponent } from './validation.component';
import { AxControlComponent } from '../ax-control/ax-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ValidationComponent', () => {
    let component: ValidationComponent;
    let fixture: ComponentFixture<ValidationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [
                ValidationComponent,
                AxControlComponent
            ],
            providers: [
                AxControlComponent
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ValidationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
