import { NgModule } from '@angular/core';
import { WnToastComponent } from './wn-toast.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [WnToastComponent],
  imports: [CommonModule],
  exports: [WnToastComponent]
})
export class WnToastModule { }
