import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filterPatientsList'
})
export class FilterPatientsListPipe implements PipeTransform {
  transform(items, searchTerm) {
    return !searchTerm ? items : items.filter(item => {
      return `${item.medication.active[0].date}`.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}