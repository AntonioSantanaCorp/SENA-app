import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@sacd/auth';
import { ControlInputComponent } from '@web/libs/shared/ui/control-field';
import { createAuthForm } from '../../form-controls/auth.form';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ControlInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {
  private readonly _authService = inject(AuthService);
  protected readonly form = createAuthForm();

  onSubmit() {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    const { user, password } = this.form.value;

    this._authService.login(user!, password!);
  }
}
