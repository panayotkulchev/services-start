export class LoggingService {
  logStatusChange(status: string) {
    console.log('A service status changed. New status is: ' + status);
  }
}
