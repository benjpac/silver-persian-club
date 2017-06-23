import { Cat } from './cat.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  pure: false
})


export class AgePipe implements PipeTransform {
  transform(input: Cat[]) {
    var output: Cat[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].age >= 1) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
