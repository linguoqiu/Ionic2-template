import { NgModule } from '@angular/core';
import { ModalHeaderComponent } from './modal-header/modal-header';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmComponent } from './confirm/confirm';
@NgModule({
	declarations: [ModalHeaderComponent,
    ConfirmComponent],
	imports: [IonicPageModule],
	exports: [ModalHeaderComponent,
    ConfirmComponent]
})
export class ComponentsModule {}
