import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxControlComponent } from './ax-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationComponent } from '../validation/validation.component';

describe('AxControlComponent', () => {
    let component: AxControlComponent;
    let fixture: ComponentFixture<AxControlComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [
                AxControlComponent,
                ValidationComponent
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AxControlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
