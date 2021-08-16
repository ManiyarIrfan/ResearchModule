import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.scss']
})
export class NavbarsComponent implements OnInit {

  constructor() { }
  elem: any;
  ngOnInit(): void {
  }
  fullScreen() {
    this.elem = document.documentElement;
    let methodToBeInvoked = this.elem.requestFullscreen ||
      this.elem.webkitRequestFullScreen || this.elem['mozRequestFullscreen']
      ||
      this.elem['msRequestFullscreen'];
    if (methodToBeInvoked) methodToBeInvoked.call(this.elem);
  }
}
