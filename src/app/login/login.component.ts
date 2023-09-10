import { Component, DestroyRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isAdmin = false;
  authService = inject(AuthService);

  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  onLoginAsAdmin() {
    this.isAdmin = true;
    this.onLogin();
  }

  onLoginAsUser() {
    this.isAdmin = false;
    this.onLogin();
  }

  private onLogin(): void {
    const observer = {
      next: () => {
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
        this.router.navigate([redirect]);
      },
      error: (err: any) => console.log(err),
      complete: () => console.log('[takeUntilDestroyed] complete')
    };
    this.authService.login(this.isAdmin).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(observer);
  }
}
