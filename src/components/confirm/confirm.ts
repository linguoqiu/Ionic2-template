import { Component, Input, Output, EventEmitter } from '@angular/core';

/*
 *   @Input() text:string 确认框提示语
 *   @Input() cancelBtnText:string 取消按钮的文本
 *   @Input() confirmBtnText:string 确认按钮的文本
 *   @Output() cancelEvent  = new EventEmitter<any>(); 取消事件
 *   @Output() confirmEvent  = new EventEmitter<any>(); 确认事件
 */
@Component({
    selector: 'confirm',
    templateUrl: 'confirm.html'
})
export class ConfirmComponent {

    @Input() text:string;
    @Input() cancelBtnText:string;
    @Input() confirmBtnText:string;
    @Output() cancelEvent  = new EventEmitter<any>();
    @Output() confirmEvent  = new EventEmitter<any>();

    public showFlag = true;

    constructor() {
    }

    cancel() {
        this.showFlag = false;
        this.cancelEvent.emit();
    }

    confirm() {
        this.showFlag = false;
        this.confirmEvent.emit();
    }
}
