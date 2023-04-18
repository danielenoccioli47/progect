import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { ServerData, Employee, Employees } from '../types/EmployeeData';
import { EmployeeService } from '../employee.service';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent {

    serverData: ServerData | undefined;
    dataSource: MatTableDataSource<Employee>;
    displayColumns = ["id", "firstName"];
    url = "";
    currentElement: Employee | undefined;

    constructor(private employeeService: EmployeeService){
        this.dataSource = new _MatTableDataSource();
        this.loadData("http://localhost:8080/employees?size=5");
    }
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'gender', 'hireDate','birthDate','actions'];

  loadData(url: string) {
    this.url = url;
    this.employeeService.getDataRows(url).subscribe( 
        (serverData) => {
            this.serverData = serverData;
            this.dataSource = new _MatTableDataSource(serverData?._embedded.employees)
        },
        (error) => {
            console.log(error)
        }
    )

  }

  primapagina(){
    if (this.serverData)
        this.loadData(this.serverData._links.first.href);
  }
  paginasuccessiva(){
    if (this.serverData)
        this.loadData(this.serverData._links.next.href);
  }
  paginaprecedente(){
    if (this.serverData)
        this.loadData(this.serverData._links.prev.href);
  }
  ultimapagina(){
    if (this.serverData)
        this.loadData(this.serverData._links.last.href);
  }

  elimina(element: Employee){
    this.employeeService.deleteRow("http://localhost:8080/employees/"+ element.id).subscribe( 
        (serverData) => {
            this.loadData(this.url)
        },
        (error) => {
            console.log(error)
        }
    )

  }

  modifica(element: Employee){
    /*
    this.employeeService.changeRow("http://localhost:8080/employees/").subscribe( 
        (serverData) => {
            this.loadData(this.url)
        },
        (error) => {
            console.log(error)
        }
    )
    */
   this.currentElement = element;
  }
  put(){
    this.employeeService.changeRow(this.url, currentElement) 
  }
}
