import { Injectable } from '@angular/core';
import { type Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdmin = false;
  redirectUrl: string = '';

  login(isAdmin: boolean = false): Observable<boolean> {
    return of(true).pipe(
      tap(() => {
        this.isAdmin = isAdmin;
      })
    );
  }

  checkLogin(url: string): boolean {
    if (this.isAdmin) {
      return true;
    }
    this.redirectUrl = url;
    return false;
  }
}
