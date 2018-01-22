import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table-demo',
  templateUrl: './data-table-demo.component.html',
  styleUrls: ['./data-table-demo.component.css']
})
export class DataTableDemoComponent implements OnInit {

  loading: boolean;
  cars: any[];
  isEditable = false;
  colorEditable = false;

  constructor() { }


  ngOnInit() {
        this.cars = [
          {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
          {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
          {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
          {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
          {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
          {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
          {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
          {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
          {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
          {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
        ];
  }

  edit(row, column){
    // console.log('button clicked');
    // console.log(column.editable);
    // column.editable = true;
    // console.log(row);
    // console.log(column.field);    
    this.colorEditable = true;
  }

  folderEditComplete(){
    console.log("edit is complete");
    console.log("set flag to false");
    this.colorEditable = false;
  }

}

