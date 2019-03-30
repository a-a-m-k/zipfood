import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filterPatientsList'
})
export class FilterPatientsListPipe implements PipeTransform {
  transform(items, searchTerm) {
    return !searchTerm ? items : items.filter(item => {
      return `${item.firstName} ${item.lastName}`.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}