import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { AngularOnscreenKeyboardComponent } from './angular-onscreen-keyboard.component';

@NgModule({
  declarations: [AngularOnscreenKeyboardComponent],
  imports: [CommonModule, HttpClientModule, MatButtonModule],
  exports: [AngularOnscreenKeyboardComponent],
})
export class AngularOnscreenKeyboardModule {}
