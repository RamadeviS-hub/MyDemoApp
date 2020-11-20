import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProductData(options?: any): Observable<any> {

    const items =  [
        { ItemCode: "TS001", Description : "Cheese", Price : 150, Stock: "In stock", Location: "Refrigerated foods"},
        { ItemCode: "TS021", Description : "Chips", Price : 100, Stock: "In stock", Location: "the Snack isle"},
        { ItemCode: "TS031", Description : "Pizza", Price : 250, Stock: "In stock", Location: "the Snack isle"},
        { ItemCode: "TS051", Description : "Chocolate", Price : 100, Stock: "out stock", Location: "Home baking"},
        { ItemCode: "TS071", Description : "Self-raising flour", Price : 120, Stock: "In stock", Location: "Home baking"},
        { ItemCode: "TS081", Description : "Cheese_white", Price : 150, Stock: "In stock", Location: "Refrigerated foods"},
        { ItemCode: "TS061", Description : "Vim Liquid", Price : 100, Stock: "In stock", Location: "toilet items"},
        { ItemCode: "TS031", Description : "Veg_Pizza", Price : 250, Stock: "In stock", Location: "the Snack isle"},
        { ItemCode: "TS006", Description : "Dark_Chocolate", Price : 100, Stock: "out stock", Location: "Home baking"},
        { ItemCode: "TS002", Description : "Wheet flour", Price : 120, Stock: "In stock", Location: "Home baking"},
        
      ];

     options.sortColumn = options.sortColumn ? options.sortColumn : 'Description';
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
    {title: 'ItemCode', name: 'ItemCode'},
    {title: 'Description', name: 'Description'},
    {title: 'Price', name: 'Price' },
    {title: 'Stock', name: 'Stock' },
    {title: 'Location  ', name: 'Location'},     
        
  ];
}

 