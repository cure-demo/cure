import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AdminService } from "src/app/shared/services/admin.service";
import * as firebase from "firebase/app";
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  age: any;
  demoForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private db: AngularFireDatabase
  ) {}

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
      wc: [],
      bp: [],
      al: [],
      pot: [],
      pcv: [],
      hemo: [],
      rc: [],
      htn: [],
      dm: [],
      cad: [],
      appet: [],
      pe: [],
      ane: []
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
    bp: string;
    al: string;
    pot: string;
    pcv: string;
    hemo: string;
    rc: string;
    htn: string;
    dm: string;
    cad: string;
    appet: string;
    pe: string;
    ane: string;
  }) {
    console.log(formValues);

    const payload = {
      age: 48,
      bp: 80,
      sg: 1.02,
      al: 1,
      su: 0,
      rbc: 0,
      pc: 0,
      pcc: 0,
      ba: 0,
      bgr: 121,
      bu: 36,
      sc: 1.2,
      sod: 0,
      pot: 0,
      hemo: 15.4,
      pcv: 44,
      wc: 7800,
      rc: 5.2,
      htn: 1,
      dm: 1,
      cad: 0,
      appet: 1,
      pe: 0,
      ane: 0
    };

    // var config = {
    //   apiKey: "AIzaSyB0O1KQS-yX_j1xfXxQGNtx5mPfaGlKzMA",
    //   authDomain: "cure-demo.firebaseapp.com",
    //   databaseURL: "https://cure-demo.firebaseio.com",
    //   storageBucket: "cure-demo.appspot.com"
    // };
    // firebase.initializeApp(config);

    this.adminService.getckd(formValues).subscribe(data => {
      console.log(data.results.results);

      // var dbRef = firebase.database().ref("cure-demo");
      // var newDBRef = dbRef.push();
      let sss ={
        name: "deepak",
        email: "deepakbhangale1996@GMAIL.COM"
      }

      const obj = this.db.database.ref('cure-demo/');
      obj.push(sss);




      if (data.results.results === 1) {
        document.getElementById("result_block").style.display = "flex";
        document.getElementById("cdk_status").innerText = "Found";
        window.scrollTo(0, document.body.scrollHeight);
      }
      if (data.results.results === 0) {
        document.getElementById("result_block").style.display = "flex";
        document.getElementById("cdk_status").innerText = "Not Found";
        document.getElementById("cdk_status").style.color = "green";
        window.scrollTo(0, document.body.scrollHeight);
      }
    });
  }
  openModal(item) {
    console.log("gg", item);
    if (item === "ckg") {
      document.getElementById("cdk_block").style.display = "flex";
    }
  }
}
