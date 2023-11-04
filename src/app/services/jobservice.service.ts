import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobserviceService {
    apiEndPoint: string="https://freeapi.miniprojectideas.com/api/Jobportal/";

  constructor(private http:HttpClient){}
  
  registerEmployer(obj:any){
    return this.http.post(this.apiEndPoint + "AddEmployer",obj);

  }


}
