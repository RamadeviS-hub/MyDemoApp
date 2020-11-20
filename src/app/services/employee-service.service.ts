import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }
  getEmployeeData(options?: any): Observable<any> {

    const items = [
      {firstName: "Tiger", lastName: "Nixon", position: "System Architect", email: "t.nixon@datatables.net" },
      {firstName: "Garrett", lastName: "Winters", position: "Accountant", email: "g.winters@datatables.net" },
      {firstName: "Ashton", lastName: "Cox", position: "Junior Technical Author", email: "a.cox@datatables.net" },
      {firstName: "Cedric", lastName: "Kelly", position: "Senior Javascript Developer", email: "c.kelly@datatables.net" },
      {firstName: "Airi", lastName: "Satou", position: "Accountant", email: "a.satou@datatables.net" },
      {firstName: "Brielle", lastName: "Williamson", position: "Integration Specialist", email: "b.williamson@datatables.net" },
      {firstName: "Herrod", lastName: "Chandler", position: "Sales Assistant", email: "h.chandler@datatables.net" },
      {firstName: "Rhona", lastName: "Davidson", position: "Integration Specialist", email: "r.davidson@datatables.net" },
      {firstName: "Colleen", lastName: "Hurst", position: "Javascript Developer", email: "c.hurst@datatables.net" },
      { firstName: "Sonya", lastName: "Frost", position: "Software Engineer", email: "s.frost@datatables.net" },
      { firstName: "Jena", lastName: "Gaines", position: "Office Manager", email: "j.gaines@datatables.net" },
      { firstName: "Quinn", lastName: "Flynn", position: "Support Lead", email: "q.flynn@datatables.net" },
      { firstName: "Charde", lastName: "Marshall", position: "Regional Director", email: "c.marshall@datatables.net" },
      { firstName: "Haley", lastName: "Kennedy", position: "Senior Marketing Designer", email: "h.kennedy@datatables.net" },
      { firstName: "Tatyana", lastName: "Fitzpatrick", position: "Regional Director", email: "t.fitzpatrick@datatables.net" },
      { firstName: "Michael", lastName: "Silva", position: "Marketing Designer", email: "m.silva@datatables.net" },
      { firstName: "Paul", lastName: "Byrd", position: "Chief Financial Officer (CFO)", email: "p.byrd@datatables.net" },
      { firstName: "Gloria", lastName: "Little", position: "Systems Administrator", email: "g.little@datatables.net" },
      { firstName: "Bradley", lastName: "Greer", position: "Software Engineer", email: "b.greer@datatables.net" },
      { firstName: "Dai", lastName: "Rios", position: "Personnel Lead", email: "d.rios@datatables.net" },
      { firstName: "Jenette", lastName: "Caldwell", position: "Development Lead", email: "j.caldwell@datatables.net" },
      { firstName: "Yuri", lastName: "Berry", position: "Chief Marketing Officer (CMO)", email: "y.berry@datatables.net" },
      { firstName: "Caesar", lastName: "Vance", position: "Pre-Sales Support", email: "c.vance@datatables.net" },
      { firstName: "Doris", lastName: "Wilder", position: "Sales Assistant", email: "d.wilder@datatables.net" },
      { firstName: "Angelica", lastName: "Ramos", position: "Chief Executive Officer (CEO)", email: "a.ramos@datatables.net" },
      { firstName: "Gavin", lastName: "Joyce", position: "Developer", email: "g.joyce@datatables.net" },
      { firstName: "Jennifer", lastName: "Chang", position: "Regional Director", email: "j.chang@datatables.net" },
      { firstName: "Brenden", lastName: "Wagner", position: "Software Engineer", email: "b.wagner@datatables.net" },
      { firstName: "Fiona", lastName: "Green", position: "Chief Operating Officer (COO)", email: "f.green@datatables.net" },
      { firstName: "Shou", lastName: "Itou", position: "Regional Marketing", email: "s.itou@datatables.net" },
      { firstName: "Michelle", lastName: "House", position: "Integration Specialist", email: "m.house@datatables.net" },
      { firstName: "Suki", lastName: "Burks", position: "Developer", email: "s.burks@datatables.net" },
      { firstName: "Prescott", lastName: "Bartlett", position: "Technical Author", email: "p.bartlett@datatables.net" },
      { firstName: "Gavin", lastName: "Cortez", position: "Team Leader", email: "g.cortez@datatables.net" },
      { firstName: "Martena", lastName: "Mccray", position: "Post-Sales support", email: "m.mccray@datatables.net" },
      { firstName: "Unity", lastName: "Butler", position: "Marketing Designer", email: "u.butler@datatables.net" },
      { firstName: "Howard", lastName: "Hatfield", position: "Office Manager", email: "h.hatfield@datatables.net" },
      { firstName: "Hope", lastName: "Fuentes", position: "Secretary", email: "h.fuentes@datatables.net" },
      { firstName: "Vivian", lastName: "Harrell", position: "Financial Controller", email: "v.harrell@datatables.net" },
      { firstName: "Timothy", lastName: "Mooney", position: "Office Manager", email: "t.mooney@datatables.net" },
      { firstName: "Jackson", lastName: "Bradshaw", position: "Director", email: "j.bradshaw@datatables.net" },
      { firstName: "Olivia", lastName: "Liang", position: "Support Engineer", email: "o.liang@datatables.net" },
      { firstName: "Bruno", lastName: "Nash", position: "Software Engineer", email: "b.nash@datatables.net" },
      { firstName: "Sakura", lastName: "Yamamoto", position: "Support Engineer", email: "s.yamamoto@datatables.net" },
      { firstName: "Thor", lastName: "Walton", position: "Developer", email: "t.walton@datatables.net" },
      { firstName: "Finn", lastName: "Camacho", position: "Support Engineer", email: "f.camacho@datatables.net" },
      { firstName: "Serge", lastName: "Baldwin", position: "Data Coordinator", email: "s.baldwin@datatables.net" },
      { firstName: "Zenaida", lastName: "Frank", position: "Software Engineer", email: "z.frank@datatables.net" },
      { firstName: "Zorita", lastName: "Serrano", position: "Software Engineer", email: "z.serrano@datatables.net" },
      { firstName: "Jennifer", lastName: "Acosta", position: "Junior Javascript Developer", email: "j.acosta@datatables.net" },
      { firstName: "Cara", lastName: "Stevens", position: "Sales Assistant", email: "c.stevens@datatables.net" },
      { firstName: "Hermione", lastName: "Butler", position: "Regional Director", email: "h.butler@datatables.net" },
      { firstName: "Lael", lastName: "Greer", position: "Systems Administrator", email: "l.greer@datatables.net" },
      { firstName: "Jonas", lastName: "Alexander", position: "Developer", email: "j.alexander@datatables.net" },
      { firstName: "Shad", lastName: "Decker", position: "Regional Director", email: "s.decker@datatables.net" },
      { firstName: "Michael", lastName: "Bruce", position: "Javascript Developer", email: "m.bruce@datatables.net" },
      { firstName: "Donna", lastName: "Snider", position: "Customer Support", email: "d.snider@datatables.net" }
  
     ];

     options.sortColumn = options.sortColumn ? options.sortColumn : 'firstName';
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
}
