import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WnToastService {

  toastEvents: Observable<{ title: string, message: string, isActive?: boolean, id?: string, type?: string, time?: number }>;
  private toastEventsSubject = new Subject<{ title: string, message: string, isActive?: boolean, id?: string, type?: string, time?: number }>();

  constructor() {
    this.toastEvents = this.toastEventsSubject.asObservable();
  }

  showToaster(message: string, title: string = '', type: string = null, time: number = 2000): void {
    this.toastEventsSubject.next({
      message,
      title,
      type,
      time
    });
  }
}
