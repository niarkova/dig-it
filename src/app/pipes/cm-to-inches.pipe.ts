import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cmToInches'
})
export class CmToInchesPipe implements PipeTransform {

  transform(cm: number): number {
    if(!isNaN(cm)) {
      const inches = cm / 2.54;

      return Math.round(inches);
    }

    return 0;
  }

}
