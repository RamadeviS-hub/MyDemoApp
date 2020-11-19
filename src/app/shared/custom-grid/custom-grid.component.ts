import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.scss']
})
export class CustomGridComponent implements OnInit {


  pagesCount = 0;
  pages:any = [];
  pageSize=10;
  currentPage=1;
  sortColumn: '';
  isPagingEnabled = true;
  
  @Input() public rows:Array<any> = [];
  @Input() public config:any = {};
  @Input() public totalrecords: number;



  // Outputs (Events)
  @Output() public pageChanged:EventEmitter<any> = new EventEmitter();

  @Input()
  public set columns(values:Array<any>) {
    values.forEach((value:any) => {
      let column = this._columns.find((col:any) => col.name === value.name);
      if (column) {
        Object.assign(column, value);
      }
      if (!column) {
        this._columns.push(value);
      }
    });
  }

  public get columns():Array<any> {
    return this._columns;
  }

  public get configColumns():any {
    let sortColumns:Array<any> = [];

    this.columns.forEach((column:any) => {
      if (column.sort) {
        sortColumns.push(column);
      }
    });

    return {columns: sortColumns};
  }

  private _columns:Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.pagesCount = Math.floor(this.totalrecords/this.pageSize);
    this.pagesCount = this.pagesCount + (this.totalrecords % this.pageSize ? 1 : 0 );
    this.pages = Array.from(Array(this.pagesCount).keys());      
  }

  getNextPage(){
    if(this.currentPage != this.pagesCount){
      this.currentPage = this.currentPage + 1;
      this.pageChanged.emit({sorting: this.sortColumn, pageNo: this.currentPage, pageSize: this.pageSize});
     }

  }

  gotoPage(pageNo:number){  
    this.currentPage = pageNo;
    this.pageChanged.emit({sorting: this.sortColumn, pageNo: this.currentPage, pageSize: this.pageSize});    
  }

  getPreviousPage(){
    if(this.currentPage != 1){
    this.currentPage = this.currentPage -1;
    this.pageChanged.emit({sorting: this.sortColumn, pageNo: this.currentPage, pageSize: this.pageSize});
   }
  }

  public onChangeTable(column:any):void {
    this._columns.forEach((col:any) => {
      if (col.name !== column.name) {
        col.sort = '';
      }
    });
    this.pageChanged.emit({sorting: this.configColumns});
  }

  public getData(row:any, propertyName:string):string {
    return propertyName.split('.').reduce((prev:any, curr:string) => prev[curr], row);
  }

  public sortRows(column:any):void {
    this._columns.forEach((col:any) => {
      if (col.name !== column.name) {
        col.sort = '';
        col.sortOrder = '';       
       
      } else {
        col.sortOrder = column.sortOrder === 'asc' ? 'desc' : 'asc';
      }
    });
    this.pageChanged.emit({sortColumn: column.name, sortOrder: column.sortOrder,  pageNo: this.currentPage, pageSize: this.pageSize});
  }
}