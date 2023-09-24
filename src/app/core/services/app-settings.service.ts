import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of, retry, share, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private appSettingsUrl = '/assets/app-settings.json';
  private sortBy = 'price';
  private httpClient = inject(HttpClient);
  private localStorageService = inject(LocalStorageService);

  getSortOptions(): Observable<string> {
    const option = this.localStorageService.getItem('sortOption');
    if (option) {
      return of(option);
    }

    return this.httpClient.get<string>(this.appSettingsUrl).pipe(
      retry(3),
      share(),
      tap(() => {
        this.localStorageService.setItem('sortOption', this.sortBy);
      }),
      catchError(err => {
        console.error(err);
        return of(this.sortBy);
      })
    );
  }

  setSortOptions(option: string) {
    this.localStorageService.setItem('sortOption', option);
  }
}
