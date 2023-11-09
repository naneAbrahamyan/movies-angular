import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../../assets/mockShoppingList';
import { Item } from 'src/assets/Item';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  isNew = true;
  name = '';
  amount = 0;
  id = 0;
  shoppingList: Item[] = ShoppingList;

  constructor() {}
  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.name || !this.amount) {
      alert('Please add the values! ');
    }

    if (!this.isNew) {
      const index = this.shoppingList.findIndex(
        (value) => value.id === this.id,
      );
      this.shoppingList[index].name = this.name;
      this.shoppingList[index].amount = this.amount;
    } else {
      const newItem: Item = {
        id: this.shoppingList.length,
        name: this.name,
        amount: this.amount,
      };

      this.shoppingList = [...this.shoppingList, newItem];
    }

    this.name = '';
    this.amount = 0;
  }

  onClear() {
    this.name = '';
    this.amount = 0;
    this.isNew = true;
  }

  onRemove() {
    const index = this.shoppingList.findIndex((value) => value.id === this.id);
    this.shoppingList.splice(index, 1);
    this.onClear();
  }

  onClick(item: Item): void {
    this.name = item.name;
    this.amount = item.amount;
    this.id = item.id;
    this.isNew = false;
  }
}
