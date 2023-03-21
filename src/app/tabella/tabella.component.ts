import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { ServerData, Employee } from '../types/EmployeeData';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent {

    data: Employee[] | undefined;
    displayColumns = ["id", "firstName"];

    constructor(private employeeService: EmployeeService){
        this.employeeService.getDataRows("http://localhost:8080/employees").subscribe( 
            (serverData) => {
                this.data = serverData._embedded.employees
            },
            (error) => {
                console.log(error)
            }
        )
    }
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'gender', 'hireDate','birthDate'];
  

}
