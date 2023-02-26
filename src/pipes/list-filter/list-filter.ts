import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ListFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'listFilter',
})
export class ListFilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any, searchText) {
    if (!searchText) {
      return items;
    }

    return items.filter(item => {
      searchText = searchText.toLowerCase();

      return item.id.toString().toLowerCase().includes(searchText) ||
        item.title.toLowerCase().includes(searchText) ||
        item.body.toLowerCase().includes(searchText);
    });
  }
}
