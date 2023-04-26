import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxControlComponent } from './ax-control.component';

describe('AxControlComponent', () => {
    let component: AxControlComponent;
    let fixture: ComponentFixture<AxControlComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AxControlComponent]
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
