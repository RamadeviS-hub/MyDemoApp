import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';
import { ProductService } from '../services/product-service.service';
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public rows:Array<any> = [];

  public page:number = 1;
  public activegrid:string = 'emp';
  public currentPage:number = 1;
  public itemsPerPage:number = 10;
  public maxSize:number = 5;
  public numPages:number = 1;
  public totalRecords:number = 0;
  public isEmpGridActive = true;  

  private data:Array<any> ;

  public constructor(private empService: EmployeeServiceService,
     private productService: ProductService) {
    
  }

  public ngOnInit():void {
    this.loadGridData();   
  }

  public onPageChange(options) {
    this.loadGridData(options);
  }

  public showProducts() {
    this.isEmpGridActive = false;
    this.currentPage = 1;
    this.activegrid = 'prod'
    const options = {pageNo:1,pageSize:10};
    
    this.loadGridData(options);
  }

  public showEmployees() {
    this.isEmpGridActive = true;
    this.activegrid = 'emp';
    this.currentPage = 1;
    const options =  {pageNo:1,pageSize:10};
    this.loadGridData(options);
    
  }

  private loadGridData(options?: any){

    if(this.isEmpGridActive){
    options = options ? options : {pageNo:1,pageSize:10};
    this.empService.getEmployeeData(options).subscribe(res => {
      if(res && res.data){
        this.rows = res.data;      
        this.totalRecords = res.count;
      }
    })
  } else {
    this.productService.getProductData(options).subscribe(res => {
      if(res && res.data){
        this.rows = res.data;      
        this.totalRecords = res.count;
      }
    }) 
  }  
  }

}
