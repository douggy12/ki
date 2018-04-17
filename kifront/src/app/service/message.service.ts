import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

    public messages = {
        OK : [],
        KO : []
    };


    addOK(message: string) {

      this.messages['OK'].push(message);
    }
    addKO(message: string) {

        this.messages['KO'].push(message);
      }

    clear() {
      this.messages = {
        OK : [],
        KO : []
    };
    }

}
