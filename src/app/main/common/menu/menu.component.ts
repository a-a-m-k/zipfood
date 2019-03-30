import { Component, OnInit } from '@angular/core';
import { MENU_STATE, MENU_ITEMS_DATA } from './menu.constant';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuState: string;
  menuItemsData: any;

  ngOnInit() {
    this.menuState = MENU_STATE.closed;
    this.menuItemsData = MENU_ITEMS_DATA;
  }

  toggleMenu() {
      this.changeMenuState(this.menuState);
  }

  changeMenuState(state) {
      this.menuState = state === MENU_STATE.closed ? MENU_STATE.opened : MENU_STATE.closed;
  }
}
