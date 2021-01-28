import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'ng-mui';
  menuData: any = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.request("get", "./../assets/mock/menu.json").subscribe(res => {
      this.menuData = [].concat(res);
    })
  }

}
