import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _isAuthenticated = signal(false);

  private readonly _user = signal('');

  isAuthenticated(): boolean {
    return this._isAuthenticated();
  }

  getUser(): string {
    return this._user();
  }

  login(user: string, password: string) {
    this._isAuthenticated.set(true);
    this._user.set(user);
  }

  logout() {
    this._isAuthenticated.set(false);
    this._user.set('');
  }
}
