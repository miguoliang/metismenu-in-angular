import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menuData;

  ngOnInit() {

    setTimeout(() => this.menuData = [
      {
        text: 'Dashboard', children: [
          { text: 'Dashboard v1' },
          { text: 'Dashboard v2' }
        ]
      },
      {
        text: 'Products', children: [
          { text: 'Product v1' },
          { text: 'Product v2' },
        ]
      },
      {
        text: 'Orders'
      }
    ], 5000);

  }

}
