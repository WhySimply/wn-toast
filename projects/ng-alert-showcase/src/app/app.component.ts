import {Component, OnInit} from '@angular/core';
import {WnToastService} from '../../../wn-toast/src/lib/wn-toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-alert-showcase';

  constructor(private readonly wnToastService: WnToastService) {
  }

  ngOnInit(): void {
    this.wnToastService.showToaster('Hello World!', 'Title', 'default', 50000);
  }
}
