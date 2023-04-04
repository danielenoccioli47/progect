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

    dataSource: MatTableDataSource<Employee>;
    displayColumns = ["id", "firstName"];

    constructor(private employeeService: EmployeeService){
        this.dataSource = new _MatTableDataSource()
        this.employeeService.getDataRows("http://localhost:8080/employees").subscribe( 
            (serverData) => {
                this.dataSource = new _MatTableDataSource(serverData?._embedded.employees)
            },
            (error) => {
                console.log(error)
            }
        )
    }
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'gender', 'hireDate','birthDate'];
  
  

}
