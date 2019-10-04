import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'FilterStringPipe'})
export class FilterStringPipe implements PipeTransform {
  transform(value: string): string {
    return 'This is custom pipe '.toLocaleUpperCase() + value;
  }
}
