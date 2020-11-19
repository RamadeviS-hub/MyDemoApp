import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'GridDemo';
 
   employees = [];
   ngOnInit(): void {
    
    // if(this.isPagingEnabled)
    // {
    //   // this.pagesCount = Math.floor(this.emps.length/this.pageSize);
    //   //this.pages = Array.from(Array(this.pagesCount).keys());
    //   //this.employees = this.emps.slice(0,this.pageSize);
    // }

  }



  }
