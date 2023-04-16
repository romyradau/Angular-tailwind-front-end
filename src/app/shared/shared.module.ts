import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
<<<<<<< HEAD
// import { ModalService } from '../services/modal.service';
=======
>>>>>>> 88bbf33a747ac1168b005112ed0164d73d3b1e99
import { ReactiveFormsModule } from '@angular/forms';
import { provideNgxMask } from 'ngx-mask';
import { NgxMaskDirective } from 'ngx-mask';
import { NgxMaskPipe } from 'ngx-mask';
<<<<<<< HEAD
import { AlertComponent } from './alert/alert.component';
=======

>>>>>>> 88bbf33a747ac1168b005112ed0164d73d3b1e99

@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective, 
    NgxMaskPipe

  ],
  exports: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent
  ],
  providers: [
    provideNgxMask()
  ]
})
export class SharedModule { }
