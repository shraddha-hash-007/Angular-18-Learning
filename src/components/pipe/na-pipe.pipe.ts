import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'naPipe',
  standalone: true
})
export class NaPipePipe implements PipeTransform {

  transform(value: unknown,): unknown {
    if (value !== 'null' && value !== undefined && value !== '') {
      return value
    }
    else {
      return 'NA'

    }
  }

}
