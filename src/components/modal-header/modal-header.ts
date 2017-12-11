import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';


@Component({
    selector: 'modal-header',
    templateUrl: 'modal-header.html'
})
export class ModalHeaderComponent {

    @Input() title : string;
    @Output() goBack = new EventEmitter<any>();
    
    constructor(private viewCtrl: ViewController) {

    }

    
    dismiss() {
        this.goBack.emit();
    }
}
