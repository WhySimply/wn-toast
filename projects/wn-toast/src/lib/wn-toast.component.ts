import {Component} from '@angular/core';
import {WnToastService} from './wn-toast.service';

@Component({
  selector: 'wn-toast',
  styleUrls: ['./wn-toast.component.scss'],
  templateUrl: './wn-toast.component.html',
})
export class WnToastComponent {

  public currentToasts: Array<{ title: string, message: string, isActive: boolean, id: string, type: string }> = [];

  constructor(private readonly wnToastService: WnToastService) {
    this.subscribeToToasts();
  }

  public subscribeToToasts(): void {
    this.wnToastService.toastEvents.subscribe((toasts) => {
      const currentToast = {
        title: toasts.title,
        id: Math.random().toString(36).substr(2, 9),
        message: toasts.message,
        isActive: true,
        type: !!toasts.type ? toasts.type : 'default'
      };
      if (this.currentToasts.length > 2) {
        this.currentToasts.shift();
      }
      this.currentToasts.unshift(currentToast);
      setTimeout(() => {
        this.removeToast(currentToast);
      }, !!toasts.time ? toasts.time : 2000);
    });
  }

  public removeToast(toast: { title: string, message: string, isActive: boolean, id: string }): void {
    toast.isActive = false;
    setTimeout(() => {
      this.currentToasts = this.currentToasts.filter(t => t.id !== toast.id);
    }, 300);
  }
}
