import { InjectionToken } from '@angular/core';
import { NamesBtn } from './widget-table.interfaces';


export const CONSTANTS: NamesBtn = {
    previous: 'previous',
    latest: 'latest'
};
export let CONSTANT_TOKEN = new InjectionToken< NamesBtn >('CONSTANT_TOKEN');

