import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        // each time the binding value changes
        query(
          ':leave',
          [stagger(100, [animate('0.5s', style({ opacity: 0 }))])],
          { optional: true }
        ),
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger(100, [animate('0.5s', style({ opacity: 1 }))]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class HomePage {
  items = [];

  public showItems() {
    this.items = Array(15)
      .fill(null)
      .map((a, index) => ({
        id: index,
        title: `some title ${index}`,
        image: `https://i.pravatar.cc/40?img=${index}`,
      }));
  }

  public hideItems() {
    this.items = [];
  }

  public toggle() {
    this.items.length ? this.hideItems() : this.showItems();
  }
}
