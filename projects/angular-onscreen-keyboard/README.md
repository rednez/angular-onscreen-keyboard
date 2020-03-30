# Angular Onscreen Keyboard Library
Onscreen Keyboard for Angular 9.1+

## Build

Run `ng build angular-onscreen-keyboard` to build the project. The build artifacts will be stored in the `dist/` directory.


## Installation

`npm install @rednez/angular-onscreen-keyboard`

## Using

Import library's module into your app module:

```typescript
import { AngularOnscreenKeyboardModule } from '@rednez/angular-onscreen-keyboard';
```

In app template:

```html
<rz-angular-onscreen-keyboard
        [isActive]="isActiveKeyboard"
        [(ngModel)]="keyboardValue"
        (enter)="onKeyboardEnter()"
        (backspace)="onKeyboardBackspace()"
        (ngModelChange)="onKeyboardModelChange($event)"
></rz-angular-onscreen-keyboard>
````

For handle a letter or symbol use `(ngModelChange)` or `[(ngModel)]`.
For handle `enter` (`return`) and `backspace` keys use `(enter)` and `(backspace)` output props.

## Authors
- [Vasyl Efimenko](https://github.com/rednez) - coding.
- [Gennady Aronson](https://www.behance.net/gennaronson) - design and concept.
