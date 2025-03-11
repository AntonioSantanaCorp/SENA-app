import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlInputComponent } from '@libs/control-field';
import { createAuthForm } from '../../form-controls/auth.form';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ControlInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export default class LoginComponent {
  protected readonly form = createAuthForm();

  onSubmit() {
    this.form.markAllAsTouched();
  }
}
