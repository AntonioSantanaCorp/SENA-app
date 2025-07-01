import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected isLoggedIn = false;

  constructor(private router: Router) {
    // Verificar si el usuario está logueado (puedes implementar tu lógica aquí)
    this.checkLoginStatus();
  }

  private checkLoginStatus(): void {
    // Aquí puedes verificar el token de autenticación o el estado del usuario
    // Por ahora, lo dejamos como false para mostrar la landing page
    this.isLoggedIn = false;
  }

  protected onLoginClick(): void {
    this.router.navigate(['/auth/login']);
  }

  protected onLogoutClick(): void {
    // Implementar lógica de logout
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
