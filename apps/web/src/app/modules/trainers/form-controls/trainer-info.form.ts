import { FormControl, Validators } from '@angular/forms';

export function contractControl() {
  return new FormControl<FileList | null>(null, Validators.required);
}
