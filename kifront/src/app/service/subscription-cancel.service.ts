import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionCancelService {

  private subscriptions: Array<Subscription> = [];

  constructor() { }

  addSubscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  cancelSubscriptions() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
