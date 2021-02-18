import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountsService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  constructor(private logService: LoggingService, private accountService: AccountsService) {
  }

  onSetTo(status: string) {
    this.accountService.changeStatus(this.id, status);
    this.logService.logStatusChange(status);
  }
}
