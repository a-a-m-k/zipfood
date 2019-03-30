export interface MenuItemsInterface {
    [index: number]: {
        name: string;
        icon: string;
        url: string;
    }
}

export interface MenuStateInterface {
    opened: string;
    closed: string;
}
