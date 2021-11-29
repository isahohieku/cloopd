import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(firstname: string, lastname: string): string {
    return `${firstname} ${lastname}`;
  }
}
