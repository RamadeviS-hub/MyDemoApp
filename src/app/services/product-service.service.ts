import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProductData(options?: any): Observable<any> {

    const items =  [
        { id: 1, description : "Cheese", price : 150, location: "Refrigerated foods"},
        { id: 2, description : "Chips", price : 100, location: "the Snack isle"},
        { id: 3, description : "Pizza", price : 250, location: "the Snack isle"},
        { id: 4, description : "Chocolate", price : 100, location: "Home baking"},
        { id: 5, description : "Self-raising flour", price : 120, location: "Home baking"},
        { id: 6, description : "Cheese_white", price : 150, location: "Refrigerated foods"},
        { id: 7, description : "Vim Liquid", price : 100, location: "toilet items"},
        { id: 8, description : "Veg_Pizza", price : 250, location: "the Snack isle"},
        { id: 9, description : "Dark_Chocolate", price : 100, location: "Home baking"},
        { id: 10, description : "Wheet flour", price : 120, location: "Home baking"},
        
      ];

     options.sortColumn = options.sortColumn ? options.sortColumn : 'description';
     if(options.sortOrder === 'desc'){
      items.sort((a,b) => a[options.sortColumn] > b[options.sortColumn] ? -1 : 1)
     } else {
      items.sort((a,b) => a[options.sortColumn] > b[options.sortColumn] ? 1 : -1)
     }
     

     if(options){
      const slice = items.slice((options.pageNo-1)*options.pageSize,  options.pageNo*options.pageSize)
      return of({data: slice, count: items.length});
     }
    return of({data: items, count: items.length});
  }

  public columns:Array<any> = [
    {title: 'Id', name: 'ID' },
    {title: 'description', name: 'Description'},
    {title: 'price', name: 'Price' },
    {title: 'location  ', name: 'Location'},     
        
  ];
}

 