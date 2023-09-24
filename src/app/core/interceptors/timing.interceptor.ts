import { Injectable } from '@angular/core';
import { HttpHeaders, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const startTimestamp = new Date().getTime();

    let clonedRequest;

    if (req.method === 'GET' || req.method === 'POST') {
      clonedRequest = req.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'user-token'
        })
      });
    } else {
      clonedRequest = req;
    }

    return next.handle(clonedRequest).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          const endTimestamp = new Date().getTime();
          const executionTime = endTimestamp - startTimestamp;
          console.log(
            `HTTP Request ${req.url} with method ${req.method} took ${executionTime} milliseconds to complete.`
          );
        }
      })
    );
  }
}
