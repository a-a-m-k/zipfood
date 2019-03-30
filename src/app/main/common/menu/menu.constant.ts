import { MenuItemsInterface, MenuStateInterface } from './menu.interface';

export const MENU_STATE: MenuStateInterface = {

      opened: 'arrow_back_ios',
      closed: 'arrow_forward_ios'
    };

export const MENU_ITEMS_DATA: MenuItemsInterface = [

    {
      name: 'Overview',
      icon: 'poll',
      url: 'overview'
    },
    {
      name: 'Patients',
      icon: 'people',
      url: 'patients'
    },
    {
      name: 'Admin',
      icon: 'account_circle',
      url: 'admin'
    }
];
