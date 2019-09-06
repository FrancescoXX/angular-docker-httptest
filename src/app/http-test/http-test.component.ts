import { Component, OnInit } from '@angular/core';
import { HttpTestService } from './http-test.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  private version = '<version>';

  constructor(private testService: HttpTestService) { }

  ngOnInit() {
  }

  agetTest() {
    this.testService.getTest()
      .subscribe((data: any) => {
        console.log('DATA', data);
        // 
        // this.version = data.version;
        // console.log('version', this.version);
      });
  }

  authToken() {
    const bodyrequest = {
      username: 'admin',
      password: '123456'
    };
    this.testService.authToken(bodyrequest)
      .subscribe((data: any) => {
        console.log('authToken DATA', data);
      });
  }
}
