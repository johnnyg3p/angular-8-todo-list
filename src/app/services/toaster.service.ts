import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  private timeOut = 3000;

  constructor(
    private toastr: ToastrService
  ) {

  }

  error(error, message) {
    this.toastr.error(message, error, {
      timeOut: this.timeOut
    });
  }

  info(info, message) {
    this.toastr.info(message, info, {
      timeOut: this.timeOut
    });
  }

  success(success, message) {
    this.toastr.success(message, success, {
      timeOut: this.timeOut
    });
  }

}
