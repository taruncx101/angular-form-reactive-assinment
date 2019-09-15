import { FormControl } from '@angular/forms';
export class CustomValidators {
  static inValidProjectname(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'invalidProjectName': true};
    } else {
      return null;
    }
  }
}
