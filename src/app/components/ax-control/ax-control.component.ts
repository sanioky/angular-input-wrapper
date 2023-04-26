import { Component, Input } from '@angular/core';

@Component({
    selector: 'ax-control',
    templateUrl: './ax-control.component.html',
    styleUrls: ['./ax-control.component.scss']
})
export class AxControlComponent {
    @Input() title = '';
}
