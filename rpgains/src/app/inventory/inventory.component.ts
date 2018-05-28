import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MENUS } from '../menuItems';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  menus = MENUS;

  selectedMenu: Menu;


  constructor() { }

  ngOnInit() {
  }

  onSelect(menu: Menu): void {
    this.selectedMenu = menu;
  }
}
