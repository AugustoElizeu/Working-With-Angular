import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  standalone: true
})
export class CategoryPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value) {
      case "grass":
        return "grass"; // use return para retornar o valor
      case 'fire':
        return 'local_fire_department';
      case 'eletric':
        return 'bolt';
      default:
        return ''; // um valor padrão, se necessário
    }
  }

}
