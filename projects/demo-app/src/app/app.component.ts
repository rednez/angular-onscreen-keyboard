import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('firstInputView') fistInputView: ElementRef;
  @ViewChild('secondInputView') secondInputView: ElementRef;

  title = 'demo-app';
  isActiveKeyboard: boolean;
  keyboardValue: string;
  firstInput = new FormControl('');
  secondInput = new FormControl('');
  private isFirstInput: boolean;

  onKeyboardModelChange(event: any) {
    if (this.isFirstInput) {
      this.fistInputView.nativeElement.focus();
      this.firstInput.setValue(this.firstInput.value + event);
    } else {
      this.secondInputView.nativeElement.focus();
      this.secondInput.setValue(this.secondInput.value + event);
    }
  }

  onShowKeyboardForFirstInput() {
    this.isFirstInput = true;
    this.isActiveKeyboard = true;
  }

  onShowKeyboardForSecondInput() {
    this.isFirstInput = false;
    this.isActiveKeyboard = true;
  }

  onHideKeyboard() {
    this.isActiveKeyboard = false;
  }

  onKeyboardEnter() {
    this.isActiveKeyboard = false;

    if (this.isFirstInput) {
      console.log(this.firstInput.value);
    } else {
      console.log(this.secondInput.value);
    }
  }

  onKeyboardBackspace() {
    const val = this.isFirstInput
      ? this.firstInput.value
      : this.secondInput.value;

    if (this.isFirstInput) {
      this.firstInput.setValue(val.substring(0, val.length - 1));
    } else {
      this.secondInput.setValue(val.substring(0, val.length - 1));
    }
  }
}
