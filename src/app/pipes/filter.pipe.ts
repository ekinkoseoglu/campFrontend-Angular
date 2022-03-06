import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Product[], searchString: string): Product[] {
    searchString = searchString ? searchString.toLocaleLowerCase() : ''; // Convert the whole Searching Filter text to lowercase if it exists.
    return searchString
      ? value.filter((p) =>
          p.productName.toLocaleLowerCase().includes(searchString)
        )
      : value;
  }
}
