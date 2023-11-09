import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/assets/Item';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css'],
})
export class ShoppingListItemComponent implements OnInit {
  @Input() item!: Item;
  @Input() index!: number;
  @Output() onClick: EventEmitter<Item> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  itemClicked(item: Item): void {
    this.onClick.emit(item);
  }
}
