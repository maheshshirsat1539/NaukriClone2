import { Component } from '@angular/core';
import { JobserviceService } from '../services/jobservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  employerObj:any = {
    "EmployerId":0,
    "CompanyName":"",
    "EmailId":"",
    "MobileNo":"",
    "PhoneNo":"",
    "CompanyAddress":"",
    "City":"",
    "State":"",
    "PinCode":"",
    "LogoUrl":"",
    "GstNo":"",
  };

  constructor(private job:JobserviceService){}

  register(){
    this.job.registerEmployer(this.employerObj).subscribe((res:any)=>{
      if(res.result)
      console.log(res.data);

    }
    )
  }

}
