import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], key: string, isAsc: boolean = false): any[] {
    const order = isAsc ? -1 : 1;

    array.sort((first: any, second: any) => {
      const firstValue = first[key];
      const secondValue = second[key];

      if (firstValue < secondValue) {
        return -1 * order;
      } else if (firstValue > secondValue) {
        return 1 * order;
      } else {
        return 0;
      }
    });

    return array;
  }
}
