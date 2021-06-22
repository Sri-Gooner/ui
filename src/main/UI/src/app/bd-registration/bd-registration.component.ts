import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';


@Component({
  selector: 'app-bd-registration',
  templateUrl: './bd-registration.component.html',
  styleUrls: ['./bd-registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BdRegistrationComponent implements OnInit {
  donorForm!:any;
  bloodGropList: string[] = ["A+","B+","O+","AB+","A-","B-","O-","AB-"];

  constructor(private formBuilder:FormBuilder, private http: HttpClient) { 
    this.donorForm = this.formBuilder.group({
      name:['',[Validators.required,Validators.maxLength(50),Validators.minLength(3)]],
      phoneNumber:['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
      bloodGroup:['',[Validators.required]],
      address:['',[Validators.required,Validators.maxLength(250),Validators.minLength(10)]]
    });
  }

  getRepos(){
    this.getReposHTTP("Sri-Gooner")
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          // this.repos = response; 
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          //this.errorMessage = error;
          // this.loading = false;
        },
        () => {                                   //complete() callback
          console.log('Request completed')      //This is actually not needed 
          // this.loading = false; 
        })
  }
  getReposHTTP(userName: string): Observable<any> {
    return this.http.get("http://localhost:8080/donorList");
  }

  get name(){
    return this.donorForm.get('name');
  }

  get phoneNumber(){
    return this.donorForm.get('phoneNumber');
  }

  get bloodGroup(){
    return this.donorForm.get('bloodGroup');
  }

  get address(){
    return this.donorForm.get('address');
  }

  submitDonorDetails(){
    alert(this.donorForm.value)
  }

  ngOnInit(): void {
  }

}
