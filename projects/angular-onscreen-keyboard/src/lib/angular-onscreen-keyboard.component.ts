import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

interface KeyboardRowItem {
  letter: string;
  symbol: string;
}

@Component({
  selector: 'rz-angular-onscreen-keyboard',
  templateUrl: './angular-onscreen-keyboard.component.html',
  styleUrls: ['./angular-onscreen-keyboard.component.scss'],
  animations: [
    trigger('showHide', [
      state('active', style({ height: '*', opacity: 1 })),
      state('inactive', style({ height: '0', opacity: 0 })),
      transition('inactive => active', animate('100ms ease-out')),
      transition('active => inactive', animate('100ms ease-in')),
    ]),
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AngularOnscreenKeyboardComponent),
      multi: true,
    },
  ],
})
export class AngularOnscreenKeyboardComponent implements ControlValueAccessor {
  @Input() isActive: boolean;
  @Output() backspace = new EventEmitter();
  @Output() enter = new EventEmitter();

  readonly firstRow: KeyboardRowItem[] = [
    { letter: 'q', symbol: '1' },
    { letter: 'w', symbol: '2' },
    { letter: 'e', symbol: '3' },
    { letter: 'r', symbol: '4' },
    { letter: 't', symbol: '5' },
    { letter: 'y', symbol: '6' },
    { letter: 'u', symbol: '7' },
    { letter: 'i', symbol: '8' },
    { letter: 'o', symbol: '9' },
    { letter: 'p', symbol: '0' },
  ];

  readonly secondRow: KeyboardRowItem[] = [
    { letter: 'a', symbol: '-' },
    { letter: 's', symbol: '/' },
    { letter: 'd', symbol: ':' },
    { letter: 'f', symbol: ';' },
    { letter: 'g', symbol: '(' },
    { letter: 'h', symbol: ')' },
    { letter: 'j', symbol: '$' },
    { letter: 'k', symbol: '&' },
    { letter: 'l', symbol: '%' },
  ];

  readonly thirdRow: KeyboardRowItem[] = [
    { letter: 'z', symbol: '+' },
    { letter: 'x', symbol: '.' },
    { letter: 'c', symbol: ',' },
    { letter: 'v', symbol: '?' },
    { letter: 'b', symbol: '!' },
    { letter: 'n', symbol: `'` },
    { letter: 'm', symbol: `'` },
    { letter: '.', symbol: '#' },
  ];

  isShiftMode: boolean;
  isSymbolsMode: boolean;
  private value: string;

  private onChange = (_: any) => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}

  writeValue(value: any): void {
    this.value = value;
  }

  onShift() {
    this.isShiftMode = !this.isShiftMode;
  }

  onKey(keyValue: string) {
    this.onChange(keyValue);
  }

  onBackspace() {
    this.backspace.emit();
  }

  onSymbolsToggle() {
    this.isSymbolsMode = !this.isSymbolsMode;
  }

  onEnter() {
    this.enter.emit();
  }

  getKeyValue(item: KeyboardRowItem) {
    return this.isSymbolsMode
      ? item.symbol
      : this.isShiftMode
      ? item.letter.toUpperCase()
      : item.letter;
  }
}
