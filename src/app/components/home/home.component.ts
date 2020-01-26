import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  age: any;
  demoForm: any;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService) { }

  ngOnInit() {
    this.demoForm = this.formBuilder.group({
      age: [],
      pc: [],
      bu: [],
      sg: [],
      pcc: [],
      sc: [],
      su: [],
      ba: [],
      sod: [],
      rbc: [],
      bgr: [],
      wc: []
    });
  }
  SubmitForm(formValues: {
    age: string;
    pc: string;
    bu: string;
    sg: string;
    pcc: string;
    sc: string;
    su: string;
    ba: string;
    sod: string;
    rbc: string;
    bgr: string;
    wc: string;
  }) {
    console.log(formValues);


    let payload = {
      age: 48,
      bp: 80
      , sg: 1.02
      , al: 1
      , su: 0
      , rbc: 0
      , pc: 0
      , pcc: 0
      , ba: 0
      , bgr: 121
      , bu: 36
      , sc: 1.2
      , sod: 0
      , pot: 0
      , hemo: 15.4
      , pcv: 44
      , wc: 7800
      , rc: 5.2
      , htn: 1
      , dm: 1
      , cad: 0
      , appet: 1
      , pe: 0
      , ane: 0

    };
    this.adminService.getckd(payload).subscribe(data => {
    console.log('ffff');
    });

  }
}
