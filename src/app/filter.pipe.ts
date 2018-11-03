import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) return value;
    return value.filter(ninja => ninja.name.toLowerCase().includes(args.toLowerCase()))
  }

}
